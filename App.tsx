
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Flower2, 
  Sparkles, 
  Brain, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  Lock, 
  Unlock, 
  Play, 
  XCircle, 
  AlertCircle, 
  Trophy, 
  RefreshCw, 
  Moon, 
  Mountain,
  Github
} from 'lucide-react';
import { 
  LEVELS, 
  getLevelQuestions, 
  PASS_THRESHOLD 
} from './data';
import { User, Level, LevelData, Option } from './types';

// --- Components ---

export default function App() {
  const [gameState, setGameState] = useState<'welcome' | 'level-select' | 'game' | 'zen-ending'>('welcome');
  const [user, setUser] = useState<User>({ name: '', totalScore: 0, unlockedLevel: 1 });
  const [currentLevelData, setCurrentLevelData] = useState<LevelData | null>(null);
  
  const renderScreen = () => {
    switch (gameState) {
      case 'welcome':
        return <WelcomeScreen onStart={(name) => {
          setUser(prev => ({ ...prev, name: name || '云游僧' }));
          setGameState('level-select');
        }} />;
      case 'level-select':
        return <LevelSelectScreen 
          user={user} 
          onSelectLevel={(level) => {
            const questions = getLevelQuestions(level.id);
            setCurrentLevelData({
              meta: level,
              questions: questions,
              currentIndex: 0,
              correctCount: 0,
              history: []
            });
            setGameState('game');
          }} 
        />;
      case 'game':
        return currentLevelData ? (
          <GameArena 
            levelData={currentLevelData}
            onExit={() => setGameState('level-select')}
            onLevelComplete={(passed, scoreEarned) => {
              const levelId = currentLevelData.meta.id;
              
              if (passed) {
                setUser(prev => ({
                  ...prev,
                  totalScore: prev.totalScore + scoreEarned,
                  unlockedLevel: Math.max(prev.unlockedLevel, levelId + 1)
                }));
                
                // 终极通关检查
                if (levelId === LEVELS.length) {
                  setGameState('zen-ending');
                  return;
                }
              }
            }}
            onReturnToMenu={() => setGameState('level-select')}
          />
        ) : <div>Loading...</div>;
      case 'zen-ending':
        return <ZenEndingScreen user={user} onReturnToMenu={() => setGameState('level-select')} />;
      default:
        return <div>Unknown State</div>;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-200 flex flex-col">
      {/* Global Header */}
      <header className="bg-stone-900 text-amber-50 shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setGameState('welcome')}>
            <Flower2 className="w-6 h-6 text-amber-500" />
            <h1 className="font-serif text-xl tracking-wider font-bold">智慧之辩</h1>
          </div>
          
          <div className="flex items-center space-x-4">
             {user.name && gameState !== 'welcome' && (
               <div className="hidden sm:flex items-center text-sm text-stone-400">
                 <span className="mr-2">法号: {user.name}</span>
               </div>
             )}
             {gameState !== 'welcome' && (
                <div className="flex items-center text-sm bg-stone-800 px-4 py-1.5 rounded-full border border-stone-700 shadow-sm">
                  <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                  <span className="font-medium text-amber-50">功德: {user.totalScore}</span>
                </div>
             )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col relative">
        <div className="flex-1 flex flex-col">
          {renderScreen()}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-stone-100 border-t border-stone-200 text-center text-stone-500 text-sm mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center space-y-2">
          <p className="font-serif">智慧之辩 · 禅意修心</p>
          <p className="text-stone-400 text-xs">每一次选择，都是一次觉察</p>
        </div>
      </footer>
    </div>
  );
}

// --- 1. 欢迎界面 ---
interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="w-full max-w-2xl text-center relative">
        {/* Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[20rem] text-stone-200/40 font-serif z-0 pointer-events-none select-none">
          悟
        </div>
        
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-xl border border-white/50 ring-1 ring-stone-900/5">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-white shadow-inner">
            <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-stone-600" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 mb-4 font-bold tracking-tight">智慧之辩</h2>
          <p className="text-stone-600 mb-10 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            每关五问，全对通过，方证菩提。<br/>
            这不是一场考试，而是一次对内心的审视。
          </p>

          <div className="max-w-sm mx-auto space-y-4">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-stone-200 focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500 transition-all">
              <input
                type="text"
                placeholder="请输入您的法号 (选填)..."
                className="w-full bg-transparent border-none rounded-lg p-3 text-center text-stone-800 outline-none text-lg placeholder:text-stone-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onStart(name)}
              />
            </div>

            <button
              onClick={() => onStart(name)}
              className="w-full bg-stone-800 hover:bg-stone-900 text-amber-50 py-4 rounded-xl font-medium text-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-stone-900/20"
            >
              <span>开启试炼</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 2. 关卡选择 ---
interface LevelSelectScreenProps {
  user: User;
  onSelectLevel: (level: Level) => void;
}

function LevelSelectScreen({ user, onSelectLevel }: LevelSelectScreenProps) {
  return (
    <div className="w-full animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-800 mb-3">修行之路</h2>
        <p className="text-stone-500">当前境界：<span className="text-amber-600 font-bold">{LEVELS[user.unlockedLevel - 1]?.title.split('：')[1] || '圆满'}</span></p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {LEVELS.map((level) => {
          const isLocked = level.id > user.unlockedLevel;
          const isPassed = level.id < user.unlockedLevel;
          const isCurrent = level.id === user.unlockedLevel;
          
          return (
            <button 
              key={level.id}
              disabled={isLocked}
              onClick={() => onSelectLevel(level)}
              className={`
                group relative p-6 sm:p-8 rounded-2xl text-left transition-all duration-300 flex flex-col h-full border
                ${isLocked 
                  ? 'bg-stone-100 border-stone-200 opacity-60 cursor-not-allowed hover:bg-stone-100' 
                  : isPassed 
                    ? 'bg-white border-amber-200 shadow-sm hover:shadow-md hover:border-amber-300'
                    : 'bg-white border-stone-300 shadow-md ring-1 ring-stone-200 hover:ring-amber-500 hover:border-amber-500 hover:shadow-xl transform hover:-translate-y-1'
                }
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm
                  ${isLocked ? 'bg-stone-200 text-stone-400' : isPassed ? 'bg-green-100 text-green-700' : 'bg-stone-900 text-white'}
                `}>
                  {isPassed ? <CheckCircle2 className="w-6 h-6" /> : level.id}
                </div>
                {level.id < user.unlockedLevel ? (
                   <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-100 flex items-center">
                     <Unlock className="w-3 h-3 mr-1" /> 已通关
                   </div>
                ) : isLocked ? (
                   <Lock className="w-5 h-5 text-stone-300" />
                ) : (
                   <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full border border-amber-200 animate-pulse">
                     当前挑战
                   </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className={`font-serif text-xl font-bold mb-2 ${isCurrent ? 'text-stone-900' : 'text-stone-700'}`}>
                  {level.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">
                  {level.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-2 flex items-center text-sm font-serif italic text-stone-400 group-hover:text-amber-600 transition-colors">
                 <span>"{level.subtitle}"</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- 3. 游戏主界面 ---
interface GameArenaProps {
  levelData: LevelData;
  onExit: () => void;
  onLevelComplete: (passed: boolean, scoreEarned: number) => void;
  onReturnToMenu: () => void;
}

function GameArena({ levelData, onExit, onLevelComplete, onReturnToMenu }: GameArenaProps) {
  const [currentIdx, setCurrentIdx] = useState(levelData.currentIndex);
  // 用 record 记录所有答题历史: { index: Option }
  const [answerHistory, setAnswerHistory] = useState<Record<number, Option>>({});
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [isLevelFinished, setIsLevelFinished] = useState(false);
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const currentQuestion = levelData.questions[currentIdx];
  const totalQuestions = levelData.questions.length;
  const isLastQuestion = currentIdx === totalQuestions - 1;
  const maxCorrect = currentQuestion.maxCorrect || 1; 

  // 从历史记录计算当前是否已答、所选答案
  const currentAnswer = answerHistory[currentIdx];
  const isAnswered = !!currentAnswer;

  // 计算总正确数
  const correctCount = Object.values(answerHistory).filter(opt => opt.isCorrect).length;
  
  // 判定是否已经无法通关
  const wrongCount = Object.values(answerHistory).filter(opt => !opt.isCorrect).length;
  const canPass = wrongCount === 0;

  const finishLevel = () => {
    setIsLevelFinished(true);
  };

  const handleNavNext = () => {
      setShowFeedbackModal(false);
      if (isLastQuestion) {
        if (Object.keys(answerHistory).length === totalQuestions) {
             finishLevel();
        }
      } else {
        setCurrentIdx(prev => prev + 1);
      }
  };

  const handleNavPrev = () => {
      setShowFeedbackModal(false);
      if (currentIdx > 0) {
        setCurrentIdx(prev => prev - 1);
      }
  };

  const handleOptionClick = (option: Option) => {
    if (isAnswered) return; // 已答过不可修改
    
    // 记录答案
    setAnswerHistory(prev => ({
        ...prev,
        [currentIdx]: option
    }));
    
    // 只有刚答完的时候显示弹窗
    setShowFeedbackModal(true);
    
    if (option.isCorrect) {
      // 自动跳转逻辑：延迟 1.5 秒
      timerRef.current = setTimeout(() => {
         // 只有当Modal还在显示时才自动跳转，防止用户已经手动切走了
         setShowFeedbackModal(prev => {
             if (prev) {
                if (isLastQuestion) {
                    finishLevel();
                } else {
                    setCurrentIdx(i => i + 1);
                    return false; // Close modal
                }
             }
             return prev;
         });
      }, 1500); 
    }
  };

  // 渲染关卡结算页
  if (isLevelFinished) {
    const passed = correctCount >= PASS_THRESHOLD;
    const score = correctCount * 10; 
    
    return (
      <LevelResultView 
        passed={passed}
        correctCount={correctCount}
        total={totalQuestions}
        levelTitle={levelData.meta.title}
        onContinue={() => {
            onLevelComplete(passed, score);
            onReturnToMenu();
        }}
        onRetry={() => {
            if(timerRef.current) clearTimeout(timerRef.current);
            onReturnToMenu(); 
        }}
      />
    );
  }

  const isCurrentlyFailed = currentAnswer && !currentAnswer.isCorrect;

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full">
      {/* 顶部状态栏 - Card Style */}
      <div className="bg-white rounded-2xl p-4 sm:px-6 shadow-sm border border-stone-200 mb-6 flex justify-between items-center sticky top-20 z-10">
        <div className="flex items-center space-x-4">
          <button onClick={onExit} className="text-stone-400 hover:text-stone-800 transition-colors flex items-center text-sm font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" /> 退出
          </button>
          <div className="h-4 w-px bg-stone-200"></div>
          <span className="font-serif text-stone-800 font-bold hidden sm:inline">{levelData.meta.title}</span>
        </div>
        
        <div className="flex items-center space-x-4">
           {/* Progress Bar Label */}
           <div className="text-xs text-stone-400 flex flex-col sm:flex-row sm:items-center text-right sm:text-left">
             <span className="mr-2">进度</span>
             <span className="text-stone-800 font-bold text-sm">{currentIdx + 1} <span className="text-stone-300 font-normal">/ {totalQuestions}</span></span>
           </div>
           
           <span className={`px-3 py-1 rounded-full text-xs font-bold border ${canPass ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-stone-100 text-stone-500 border-stone-200'}`}>
            {canPass ? '持戒中' : '破戒了'}
          </span>
        </div>
      </div>

      {/* 题目区 - Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden flex flex-col md:flex-row relative animate-in fade-in duration-300">
        {/* Progress Bar (Top of card) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-stone-100 z-20">
          <div 
            className="h-full bg-amber-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* 左侧：问题描述 */}
        <div className="md:w-5/12 bg-stone-900 text-amber-50 p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 p-24 bg-stone-700/20 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none"></div>
           
           <span className="relative z-10 text-amber-500/80 font-serif text-sm tracking-widest mb-4 block">问题 {currentIdx + 1}</span>
           <h3 className="relative z-10 font-serif text-2xl sm:text-3xl font-bold leading-tight mb-6">
            {currentQuestion.q}
           </h3>
           <div className="relative z-10 mt-auto pt-8 border-t border-white/10 text-white/40 text-sm">
             <p>{levelData.meta.subtitle}</p>
           </div>
        </div>

        {/* 右侧：选项与反馈 */}
        <div className="md:w-7/12 p-6 sm:p-10 bg-white flex flex-col relative">
          <div className="space-y-4 flex-1">
            {currentQuestion.options.map((option, index) => {
              let containerClass = "bg-white border-stone-200 hover:border-amber-400 hover:bg-stone-50 hover:shadow-md";
              let textClass = "text-stone-700";
              let icon: React.ReactNode = String.fromCharCode(65 + index);
              let iconClass = "bg-stone-50 border-stone-300 text-stone-400";

              if (isAnswered) {
                if (currentAnswer === option) {
                  // 用户选的
                  if (option.isCorrect) {
                    containerClass = "bg-green-50 border-green-500 ring-1 ring-green-500";
                    textClass = "text-green-900 font-medium";
                    iconClass = "bg-green-500 border-green-500 text-white";
                    icon = <CheckCircle2 className="w-4 h-4" />;
                  } else {
                    containerClass = "bg-red-50 border-red-400 ring-1 ring-red-400";
                    textClass = "text-red-900";
                    iconClass = "bg-red-400 border-red-400 text-white";
                    icon = <XCircle className="w-4 h-4" />;
                  }
                } else if (option.isCorrect) {
                  // 正确但未选
                  containerClass = "bg-green-50 border-green-200 border-dashed opacity-70";
                  textClass = "text-green-800";
                  iconClass = "bg-green-100 text-green-600 border-green-200";
                } else {
                  containerClass = "opacity-40 grayscale";
                }
              }

              return (
                <button
                  key={index}
                  disabled={isAnswered}
                  onClick={() => handleOptionClick(option)}
                  className={`
                    w-full p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 flex items-start group
                    ${containerClass}
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-full border flex items-center justify-center mr-4 text-xs font-bold flex-shrink-0 transition-colors mt-0.5
                    ${iconClass}
                  `}>
                    {icon}
                  </div>
                  <span className={`text-sm sm:text-base leading-relaxed ${textClass}`}>{option.text}</span>
                </button>
              );
            })}
          </div>

          {/* 导航按钮 */}
          <div className="w-full flex justify-between items-center text-sm font-medium text-stone-500 pt-8 mt-4 border-t border-stone-100">
             <button 
                onClick={handleNavPrev}
                disabled={currentIdx === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors ${currentIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-stone-800'}`}
             >
                <ChevronLeft className="w-4 h-4" />
                <span>上一题</span>
             </button>

             <button 
                onClick={handleNavNext}
                disabled={isLastQuestion && Object.keys(answerHistory).length !== totalQuestions}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all ${isLastQuestion && Object.keys(answerHistory).length !== totalQuestions ? 'opacity-30 cursor-not-allowed bg-stone-100' : 'bg-stone-900 text-white hover:bg-stone-800 shadow-lg shadow-stone-200'}`}
             >
                <span>{isLastQuestion ? "查看结果" : "下一题"}</span>
                <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
      
      {/* 静态反馈区域 (在卡片下方，当回答后显示) - 替代原来的模态框，在宽屏上更自然 */}
      {isAnswered && (
        <div className="mt-6 animate-in slide-in-from-top-4 duration-500 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
             <h4 className={`font-serif font-bold text-lg mb-2 flex items-center ${currentAnswer.isCorrect ? 'text-green-700' : 'text-stone-800'}`}>
                {currentAnswer.isCorrect ? (
                    <><CheckCircle2 className="w-5 h-5 mr-2" /> 回答正确</>
                ) : (
                    <><Brain className="w-5 h-5 mr-2 text-stone-400" /> 禅机解析</>
                )}
             </h4>
             <div className="h-px w-full bg-stone-100 mb-4"></div>
             <p className="text-stone-600 leading-relaxed text-lg font-serif">
                {currentAnswer.feedback}
             </p>
             {maxCorrect > 1 && currentAnswer.isCorrect && (
                <p className="text-sm mt-4 text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-lg border border-amber-100">
                    此问多解，施主已得其一。
                </p>
            )}
        </div>
      )}

      {/* 模态框反馈 (仅移动端或作为强化提醒，这里我们主要依赖上面的静态反馈，但为了交互流畅性保留自动跳转前的短暂停留反馈逻辑，这里可简化或移除，因为已经有了静态展示。为了符合Web习惯，我们让用户自己点下一题比较好，或者自动跳转。原来的逻辑是弹窗，现在我们用静态区域代替了弹窗，所以去掉弹窗代码，保留自动跳转逻辑中的计时器用于翻页) */}
      
    </div>
  );
}

// --- 4. 关卡小结界面 ---
interface LevelResultViewProps {
  passed: boolean;
  correctCount: number;
  total: number;
  levelTitle: string;
  onContinue: () => void;
  onRetry: () => void;
}

function LevelResultView({ passed, correctCount, total, levelTitle, onContinue, onRetry }: LevelResultViewProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 animate-in zoom-in duration-300 min-h-[500px]">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl ${passed ? 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600' : 'bg-stone-200 text-stone-500'}`}>
        {passed ? <Trophy className="w-12 h-12" /> : <RefreshCw className="w-12 h-12" />}
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-4">
        {passed ? "圆满过关" : "修行未满"}
      </h2>
      
      <div className="flex items-baseline justify-center space-x-2 mb-6">
         <span className="text-6xl font-bold text-stone-900 font-serif">{correctCount}</span>
         <span className="text-2xl text-stone-400 font-serif">/ {total}</span>
      </div>
      
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm max-w-md w-full mb-10 text-center">
        <p className="text-stone-600 text-base leading-relaxed">
            {passed 
            ? `善哉！施主在"${levelTitle}"中展现了卓越的智慧，全题皆对。心如明镜，不染尘埃。` 
            : `可惜，通关需要答对 ${PASS_THRESHOLD} 题。心若浮躁，智慧难生，请重新来过。`
            }
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md">
        {passed ? (
          <button onClick={onContinue} className="flex-1 bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {levelTitle === LEVELS[LEVELS.length - 1].title ? "进入禅寂之境" : "下一关"}
          </button>
        ) : (
          <button onClick={onRetry} className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-800 py-4 rounded-xl font-bold transition-all">
            重新挑战
          </button>
        )}
      </div>
    </div>
  );
}

// --- 5. 禅寂完结界面 ---
interface ZenEndingScreenProps {
  user: User;
  onReturnToMenu: () => void;
}

function ZenEndingScreen({ user, onReturnToMenu }: ZenEndingScreenProps) {
    // Generate particles for the atmosphere
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 20,
            size: Math.random()
        }));
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-stone-950 text-amber-50 overflow-hidden z-50">
            {/* Custom Styles for this screen */}
            <style>{`
                @keyframes float-up {
                    0% { transform: translateY(110vh) scale(0.5); opacity: 0; }
                    20% { opacity: 0.4; }
                    80% { opacity: 0.4; }
                    100% { transform: translateY(-10vh) scale(1); opacity: 0; }
                }
                .particle {
                    position: absolute;
                    border-radius: 50%;
                    background: #fbbf24; /* amber-400 */
                    pointer-events: none;
                    animation: float-up linear infinite;
                }
                @keyframes pulse-glow {
                    0%, 100% { filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.2)); transform: scale(1); opacity: 0.8; }
                    50% { filter: drop-shadow(0 0 30px rgba(251, 191, 36, 0.5)); transform: scale(1.05); opacity: 1; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .zen-mandala {
                    animation: pulse-glow 6s ease-in-out infinite;
                }
                .spin-ring {
                    animation: spin-slow 30s linear infinite;
                }
                .spin-ring-reverse {
                    animation: spin-slow 45s linear infinite reverse;
                }
            `}</style>

            {/* Deep Background with Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black" />
            
            {/* Floating Particles */}
            {particles.map(p => (
                <div 
                    key={p.id} 
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size * 3 + 1}px`,
                        height: `${p.size * 3 + 1}px`,
                        opacity: p.size * 0.5 + 0.1,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `-${p.delay}s`
                    }}
                />
            ))}

            {/* Central Visual */}
            <div className="relative z-10 mb-12 flex items-center justify-center scale-125 sm:scale-150">
                 {/* Decorative Rings */}
                 <div className="absolute w-[300px] h-[300px] border border-stone-800/50 rounded-full spin-ring" />
                 <div className="absolute w-[220px] h-[220px] border border-amber-900/20 rounded-full spin-ring-reverse" />
                 
                 {/* Main Glowing Icon */}
                 <div className="zen-mandala relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />
                    <Flower2 className="w-24 h-24 text-amber-100/90 relative z-10" strokeWidth={1} />
                 </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-6 max-w-lg space-y-8">
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                    <h2 className="text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-600 tracking-widest drop-shadow-sm">
                        圆满
                    </h2>
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-8" />
                </div>

                <div className="space-y-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
                    <p className="text-2xl text-stone-300 font-serif italic leading-relaxed">
                        “本来无一物，何处惹尘埃”
                    </p>
                    <p className="text-sm text-stone-500 tracking-widest">—— 六祖慧能</p>
                </div>

                <div className="opacity-0 animate-in fade-in zoom-in-95 duration-1000 delay-1000 fill-mode-forwards bg-stone-900/80 backdrop-blur-md p-8 rounded-2xl border border-stone-800 shadow-2xl">
                    <div className="text-stone-500 text-xs uppercase tracking-[0.3em] mb-2">施主法号</div>
                    <div className="text-3xl font-serif text-amber-50 mb-6">{user.name}</div>
                    <div className="flex justify-center items-center space-x-6 text-sm border-t border-stone-800 pt-6">
                        <span className="text-stone-400">总功德</span>
                        <span className="text-amber-400 font-bold text-xl">{user.totalScore}</span>
                    </div>
                </div>

                {/* Return Button */}
                <div className="pt-8 opacity-0 animate-in fade-in duration-1000 delay-[2000ms] fill-mode-forwards">
                    <button 
                        onClick={onReturnToMenu}
                        className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full transition-all duration-500 hover:bg-stone-900 border border-stone-700 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]"
                    >
                        <span className="relative flex items-center space-x-3 text-stone-400 group-hover:text-amber-100 transition-colors">
                            <Mountain className="w-4 h-4" />
                            <span className="tracking-widest text-sm">回归红尘</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
