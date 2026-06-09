'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // 后续可接入 Mailchimp / ConvertKit 等邮件服务
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-xl p-6 my-8 text-center">
        <span className="text-3xl">🎉</span>
        <h3 className="text-lg font-bold mt-2">订阅成功！</h3>
        <p className="text-sm text-indigo-100 mt-1">感谢你的订阅，有新内容会第一时间通知你。</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white rounded-xl p-6 my-8">
      <h3 className="text-lg font-bold mb-1">📧 订阅更新</h3>
      <p className="text-sm text-indigo-100 mb-4 leading-relaxed">
        每周分享最新 AI 工具评测和副业赚钱方法，不错过任何机会。
      </p>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="输入你的邮箱地址"
          required
          className="flex-1 px-3 py-2.5 rounded-lg text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-300 transition-colors text-sm shadow-sm flex-shrink-0"
        >
          订阅
        </button>
      </form>
      <p className="text-[11px] text-indigo-200 mt-2">
        不发送垃圾邮件，随时可退订
      </p>
    </div>
  )
}
