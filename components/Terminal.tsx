'use client'

import { useState, useEffect, useRef } from 'react'

interface Command {
    input: string
    output: React.ReactNode
}

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [history, setHistory] = useState<Command[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [history])

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase()
        let output: React.ReactNode = ''

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="space-y-1 text-gray-300">
                        <p>Available commands:</p>
                        <p className="pl-4"><span className="text-terminal-green">about</span> - About Surya</p>
                        <p className="pl-4"><span className="text-terminal-green">experience</span> - Work history</p>
                        <p className="pl-4"><span className="text-terminal-green">skills</span> - Technical skills</p>
                        <p className="pl-4"><span className="text-terminal-green">contact</span> - Contact info</p>
                        <p className="pl-4"><span className="text-terminal-green">clear</span> - Clear terminal</p>
                        <p className="pl-4"><span className="text-terminal-green">exit</span> - Close terminal</p>
                    </div>
                )
                break
            case 'about':
                output = "Full Stack Engineer passionate about building scalable applications."
                break
            case 'experience':
                output = 'Backend Lead @ Aiphant Technologies. Expert in Node.js, AWS, Docker, and cloud infrastructure.'
                break
            case 'skills':
                output = "Node.js, React, AWS, Docker, PostgreSQL, MongoDB..."
                break
            case 'contact':
                output = 'Email: suryadattatangirala@outlook.com | LinkedIn: linkedin.com/in/surya-datta | GitHub: github.com/suryadatta1'
                break
            case 'clear':
                setHistory([])
                return
            case 'exit':
                setIsOpen(false)
                return
            case '':
                return
            default:
                output = <span className="text-red-500">Command not found: {trimmedCmd}. Type &apos;help&apos; for available commands.</span>
        }

        setHistory(prev => [...prev, { input: cmd, output }])
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input)
            setInput('')
        }
    }

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 left-8 z-50 p-3 bg-terminal-black border border-terminal-green rounded-full text-terminal-green hover:bg-terminal-green hover:text-terminal-black transition-all duration-300 shadow-lg shadow-terminal-green/20"
                aria-label="Toggle Terminal"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </button>

            {/* Terminal Window */}
            {isOpen && (
                <div className="fixed bottom-24 left-4 right-4 md:left-8 md:w-[600px] h-[400px] bg-terminal-black/95 border border-terminal-green rounded-lg shadow-2xl shadow-terminal-green/10 backdrop-blur-md z-50 flex flex-col overflow-hidden animate-fade-in">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-terminal-dim/20 border-b border-terminal-dim">
                        <span className="text-xs text-terminal-green">surya_terminal — bash</span>
                        <div className="flex gap-2">
                            <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 font-mono text-sm overflow-y-auto custom-scrollbar" onClick={() => inputRef.current?.focus()}>
                        <div className="space-y-2">
                            <div className="text-gray-400">Welcome to Surya&apos;s Interactive Terminal v1.0.0</div>
                            <div className="text-gray-400">Type <span className="text-terminal-green">&apos;help&apos;</span> to see available commands.</div>

                            {history.map((entry, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex gap-2">
                                        <span className="text-terminal-green">visitor@portfolio:~$</span>
                                        <span className="text-white">{entry.input}</span>
                                    </div>
                                    <div className="pl-4 text-gray-300">{entry.output}</div>
                                </div>
                            ))}

                            <div className="flex gap-2 items-center">
                                <span className="text-terminal-green">visitor@portfolio:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                                    autoFocus
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
