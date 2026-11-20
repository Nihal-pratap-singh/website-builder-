import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import PromptInput from '../components/PromptInput'
import { homeTags } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRightIcon,
  ClockIcon,
  Trash2Icon,
  LayersIcon,
  SparklesIcon,
  LayoutDashboardIcon
} from 'lucide-react'
import moment from 'moment'

const HomePage = () => {
  const navigate = useNavigate()

  const {
    user,
    projects,
    loadingProjects,
    generatingProject,
    loadProjects,
    handleGenerate,
    handleDelete,
    logout
  } = useAppContext()

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  return (
    <div className="min-h-screen bg-[#17151B] text-[#F0EAE2] font-sans">

      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-[#17151B]/95 backdrop-blur-xl border-b border-white/7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A96E] flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-6 h-6 object-contain" />
            </div>

            <div>
              <span className="text-lg font-semibold tracking-tight">
                Website Builder
              </span>
              <p className="text-[10px] text-[#C9A96E] tracking-[0.18em]">
                AI CREATIVE STUDIO
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-[#F0EAE2]">
                {user?.name}
              </p>
              <p className="text-xs text-[#A69EAA]">
                Workspace
              </p>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#D6A6A1] flex items-center justify-center text-[#28252D] text-sm font-semibold">
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            <button
              onClick={logout}
              className="text-xs sm:text-sm px-3 py-2 rounded-lg border border-white/15 text-[#E3D9CE] hover:bg-[#C9A96E] hover:text-[#17151B] hover:border-[#C9A96E] transition-all cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Welcome Section */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-center mb-12">

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D9BC83] bg-[#C9A96E]/10 border border-[#C9A96E]/25 rounded-full px-3 py-2 mb-5">
              <SparklesIcon size={14} />
              YOUR CREATIVE WORKSPACE
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
              What are we
              <span className="block text-[#D9BC83] mt-1">
                building today?
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#B7AEB9] leading-7 max-w-lg mt-5">
              Turn your ideas into beautiful websites. Describe your vision and let AI help you bring it to life.
            </p>
          </div>

          {/* Side Information Card */}
          <div className="hidden lg:flex bg-[#28252D] border border-white/8 rounded-2xl p-6 flex-col gap-5">

            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/15 flex items-center justify-center">
                <LayersIcon size={21} className="text-[#D9BC83]" />
              </div>

              <span className="text-[10px] text-[#D9BC83] border border-[#C9A96E]/30 rounded-full px-3 py-1">
                AI POWERED
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                From idea to website
              </h3>
              <p className="text-xs text-[#B7AEB9] mt-2 leading-6">
                Create, customize and preview your next website in one workspace.
              </p>
            </div>

            <div className="flex gap-2">
              <div className="h-1.5 rounded-full bg-[#C9A96E] flex-1" />
              <div className="h-1.5 rounded-full bg-[#D6A6A1] flex-1" />
              <div className="h-1.5 rounded-full bg-[#A69EAA] flex-1" />
              <div className="h-1.5 rounded-full bg-[#E9DFD4] flex-1" />
            </div>
          </div>
        </section>

        {/* Prompt Workspace */}
        <section className="bg-[#222027] border border-white/9 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/15 flex items-center justify-center">
              <SparklesIcon size={17} className="text-[#D9BC83]" />
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-semibold">
                Create something new
              </h2>
              <p className="text-xs text-[#A69EAA] mt-1">
                Tell AI what you want to build
              </p>
            </div>
          </div>

          <PromptInput
            onSubmit={handleGenerate}
            loading={generatingProject}
            placeholder="Describe your website idea..."
            variant="glass"
            autoFocus
          />

          {/* Suggestion Tags */}
          <div className="mt-6">
            <p className="text-xs text-[#A69EAA] mb-3">
              Need some inspiration? Try these
            </p>

            <div className="flex flex-wrap gap-2">
              {homeTags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => handleGenerate(tag)}
                  disabled={generatingProject}
                  className="px-3 py-2 rounded-lg border border-white/10 bg-[#302C35] text-[#D7CDD9] text-xs sm:text-sm hover:bg-[#C9A96E]/15 hover:border-[#C9A96E]/50 hover:text-[#E8C982] transition-all cursor-pointer disabled:opacity-40"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {!loadingProjects && projects.length > 0 && (
          <section className="mt-14 sm:mt-16">

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/15 flex items-center justify-center">
                  <LayoutDashboardIcon size={19} className="text-[#D9BC83]" />
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    My Projects
                  </h2>
                  <p className="text-xs text-[#A69EAA] mt-1">
                    Your recently created websites
                  </p>
                </div>
              </div>

              <span className="px-3 py-1.5 rounded-lg bg-[#28252D] border border-white/10 text-xs text-[#D9BC83]">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((p) => (
                <div
                  key={p._id}
                  onClick={() => navigate(`/builder/${p._id}`)}
                  className="group bg-[#222027] border border-white/8 rounded-xl overflow-hidden hover:border-[#C9A96E]/50 hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="h-32 bg-[#302C35] relative flex items-center justify-center border-b border-white/7">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/15 flex items-center justify-center group-hover:bg-[#C9A96E]/25 transition-colors">
                      <LayersIcon size={25} className="text-[#D9BC83]" />
                    </div>

                    <span className="absolute top-3 right-3 text-[10px] text-[#E2C98F] bg-[#17151B]/80 px-2 py-1 rounded-md">
                      v{p.version}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#F0EAE2] truncate">
                        {p.name}
                      </h3>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(p._id)
                        }}
                        aria-label="Delete project"
                        className="p-2 rounded-lg text-[#A69EAA] hover:text-red-400 hover:bg-red-400/10 transition-colors cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                      >
                        <Trash2Icon size={15} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="flex items-center gap-1.5 text-xs text-[#A69EAA]">
                        <ClockIcon size={12} />
                        {moment(p.updatedAt || p.createdAt).fromNow()}
                      </span>

                      <span className="flex items-center gap-1 text-xs text-[#D9BC83] group-hover:text-[#F0EAE2] transition-colors">
                        Open project
                        <ArrowRightIcon size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#A69EAA]">
            © {new Date().getFullYear()} Website Builder
          </p>
          <p className="text-xs text-[#A69EAA]">
            Made for creative ideas
          </p>
        </footer>

      </main>
    </div>
  )
}

export default HomePage