"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotesApp() {
  const router = useRouter();
  const [notes, setNotes] = useState<string[]>(["Welcome to your new notes app! 🎉"]);
  const [newNote, setNewNote] = useState("");

  const handleLogout = () => {
    router.push("/");
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([newNote, ...notes]);
      setNewNote("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10 pb-6 border-b-2 border-slate-200 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            My Notes 📝
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-xl bg-white border-2 border-red-100 px-5 py-2.5 text-sm font-bold text-red-600 shadow-sm transition-all hover:bg-red-50 hover:border-red-200 hover:shadow-md active:scale-95"
          >
            Logout
          </button>
        </header>

        {/* Input Form */}
        <form onSubmit={handleAddNote} className="mb-12 flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          {/* FIX: Added text-slate-900 so typed text is black */}
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="What's on your mind?..."
            className="flex-1 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          />
          <button
            type="submit"
            className="rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-300 active:translate-y-0"
          >
            Add Note
          </button>
        </form>

        {/* Notes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => (
            <div 
              key={index} 
              // Added animation to make each card pop in
              className="group rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-100 animate-in fade-in zoom-in duration-500"
            >
              <div className="h-2 w-8 bg-indigo-500 rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-slate-800 font-medium leading-relaxed">{note}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}