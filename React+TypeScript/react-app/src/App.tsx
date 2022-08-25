import React from 'react'

// Hook本质还是一个钩子函数
// - 把小写字母转换大写

const samllWord = 'hello world!'

// 自定义一个hook
function useWord(word: string):string {
  return word.toUpperCase();
}

function App() {

  const bigWord =  useWord(samllWord)
  return (
    <div>
      <h1>小写:{samllWord}</h1>
      <h1>小写:{bigWord}</h1>
    </div>
  )
}

export default App
