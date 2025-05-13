'use client'; // Add this line at the top

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { FaNodeJs, FaPython, FaPhp, FaGitAlt, FaDatabase, FaRegLightbulb, FaUserFriends, FaRocket } from 'react-icons/fa';
import { SiTypescript, SiGo, SiFlutter, SiMongodb, SiVercel, SiRailway, SiCloudflare, SiPostman, SiJira } from 'react-icons/si';

const GITHUB_USERNAME = "Cahskuy";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 6)))
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      <section className="py-16 text-center">
        <Image
          src={`https://github.com/${GITHUB_USERNAME}.png`}
          alt="avatar"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="text-3xl font-bold">Bagus Nugraha</h1>
        <p className="mt-2 max-w-2xl mx-auto px-4">
          I am an experienced and dedicated backend developer, skilled in REST API development and comprehensive documentation. Over the past three years of my professional career, Node.js has become the primary environment for developing my backend projects. I am proficient in using Git, GitHub, and JIRA for project management. A quick learner with the ability to grasp new concepts rapidly, whether working independently or collaboratively within a team.
        </p>
      </section>

      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          {[
            { skill: "REST API Development", icon: <FaNodeJs /> },
            { skill: "API Documentation (Stoplight)", icon: <SiPostman /> },
            { skill: "Node.js", icon: <FaNodeJs /> },
            { skill: "TypeScript", icon: <SiTypescript /> },
            { skill: "Hono", icon: <FaNodeJs /> },
            { skill: "Go", icon: <SiGo /> },
            { skill: "Python", icon: <FaPython /> },
            { skill: "PHP", icon: <FaPhp /> },
            { skill: "Flutter", icon: <SiFlutter /> },
            { skill: "SQL (PostgreSQL, MySQL)", icon: <FaDatabase /> },
            { skill: "NoSQL (MongoDB, Redis)", icon: <SiMongodb /> },
            { skill: "Git, GitHub", icon: <FaGitAlt /> },
            { skill: "Vercel", icon: <SiVercel /> },
            { skill: "Railway", icon: <SiRailway /> },
            { skill: "Cloudflare (Basic)", icon: <SiCloudflare /> },
            { skill: "Postman", icon: <SiPostman /> },
            { skill: "TablePlus", icon: <FaDatabase /> },
            { skill: "JIRA", icon: <SiJira /> },
            { skill: "Problem-Solving", icon: <FaRegLightbulb /> },
            { skill: "Collaboration", icon: <FaUserFriends /> },
            { skill: "Fast Learning", icon: <FaRocket /> },
          ].map(({ skill, icon }) => (
            <li key={skill} className="bg-gray-800 px-3 py-1 rounded-md flex items-center gap-2">
              {icon}
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo: Repo) => (
            <div key={repo.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold">{repo.name}</h3>
              <p className="text-sm text-gray-300">{repo.description}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 hover:underline"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:bagusn1367@gmail.com" className="text-blue-400">bagusn1367@gmail.com</a></p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/Cahskuy" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/bagusngrha" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bagus Nugraha. Built with Next.js & Tailwind. Deployed on Vercel.
      </footer>
    </main>
  );
}
