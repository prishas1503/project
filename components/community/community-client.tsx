"use client"

import { useState } from "react"
import {
  Users,
  MessageCircle,
  Send,
  ThumbsUp,
  Star,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollAnimate } from "@/components/scroll-animate"
import { cn } from "@/lib/utils"

interface Post {
  id: number
  author: string
  week: string
  avatar: string
  content: string
  likes: number
  replies: number
  time: string
  liked: boolean
}

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Ananya S.",
    week: "Week 28",
    avatar: "AS",
    content:
      "Just felt my baby kick for the first time during a meeting! I had to pretend I was coughing to hide my excitement. Any other moms have funny stories about first kicks?",
    likes: 24,
    replies: 8,
    time: "2 hours ago",
    liked: false,
  },
  {
    id: 2,
    author: "Priya M.",
    week: "Week 16",
    avatar: "PM",
    content:
      "The nausea is finally going away and I can enjoy food again! Tried making the spinach smoothie from the nutrition page -- it's actually delicious! Highly recommend.",
    likes: 18,
    replies: 5,
    time: "4 hours ago",
    liked: false,
  },
  {
    id: 3,
    author: "Kavya R.",
    week: "Week 34",
    avatar: "KR",
    content:
      "Started nesting mode! Spent the entire weekend organizing the nursery. Has anyone tried the prenatal yoga classes? Looking for something gentle for the third trimester.",
    likes: 31,
    replies: 12,
    time: "6 hours ago",
    liked: false,
  },
  {
    id: 4,
    author: "Divya K.",
    week: "Week 20",
    avatar: "DK",
    content:
      "Halfway there! Just had our anatomy scan and everything looks great. The due date calculator on this site was so accurate. Feeling grateful and excited!",
    likes: 42,
    replies: 15,
    time: "8 hours ago",
    liked: false,
  },
  {
    id: 5,
    author: "Meera T.",
    week: "Week 12",
    avatar: "MT",
    content:
      "End of first trimester! It's been tough with the morning sickness but reading all your stories here has been so comforting. This community is amazing.",
    likes: 27,
    replies: 9,
    time: "1 day ago",
    liked: false,
  },
]

const stories = [
  {
    author: "Lakshmi V.",
    title: "My Water Birth Journey",
    excerpt:
      "After months of preparation, I chose a water birth. It was the most empowering experience of my life. Here's my story and tips for anyone considering it...",
  },
  {
    author: "Sneha P.",
    title: "Overcoming Gestational Diabetes",
    excerpt:
      "When I was diagnosed with GD at week 26, I was terrified. But with diet changes and monitoring, my baby and I came through beautifully. Here's what helped...",
  },
  {
    author: "Ritu A.",
    title: "Twins Surprise at Week 8!",
    excerpt:
      "We went in for our first ultrasound expecting one heartbeat and heard two! The shock, joy, and everything that followed on our double blessing journey...",
  },
]

export function CommunityClient() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState("")

  function handleLike(id: number) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    )
  }

  function handleSubmitPost() {
    if (!newPost.trim()) return
    const post: Post = {
      id: Date.now(),
      author: "You",
      week: "Your journey",
      avatar: "YO",
      content: newPost,
      likes: 0,
      replies: 0,
      time: "Just now",
      liked: false,
    }
    setPosts((prev) => [post, ...prev])
    setNewPost("")
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-50 to-background px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Users className="h-4 w-4" />
            Mama Community
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Connect & <span className="text-primary">Share</span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A safe, supportive space for expecting mothers to share experiences,
            ask questions, and uplift each other.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Post input */}
          <ScrollAnimate>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  YO
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <Input
                    placeholder="Share something with the community..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSubmitPost()
                    }}
                    className="border-border bg-background text-foreground"
                  />
                  <div className="flex justify-end">
                    <Button
                      onClick={handleSubmitPost}
                      disabled={!newPost.trim()}
                      size="sm"
                      className="shadow-sm shadow-primary/20"
                    >
                      <Send className="mr-1.5 h-3.5 w-3.5" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Posts feed */}
          <div className="mt-6 flex flex-col gap-4">
            {posts.map((post, i) => (
              <ScrollAnimate key={post.id} delay={i * 60}>
                <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md hover:shadow-primary/5">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-200 text-sm font-bold text-purple-800">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-card-foreground">
                          {post.author}
                        </span>
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
                          {post.week}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.time}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.content}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={cn(
                            "flex items-center gap-1.5 text-xs font-medium transition-colors",
                            post.liked
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          <ThumbsUp
                            className={cn("h-4 w-4", post.liked && "fill-primary")}
                          />
                          {post.likes}
                        </button>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MessageCircle className="h-4 w-4" />
                          {post.replies} replies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Stories */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollAnimate>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Inspirational <span className="text-primary">Stories</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Real stories from real mothers in our community.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((story, i) => (
              <ScrollAnimate key={story.title} delay={i * 100}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {story.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {story.excerpt}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    By {story.author}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
