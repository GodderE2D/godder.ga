import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, Heart } from "react-ionicons";
import { BlogsType } from "../types/supabase";
import dayjs from "dayjs";

const formatDate = (date: string | number | Date) =>
  dayjs(new Date(date)).format("dddd, MMMM D, YYYY");

const Footer = ({ blogData }: { blogData: BlogsType | null }) => {
  return (
    <div>
      <div className="h-20" />

      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <Image
            width="50"
            height="50"
            src="/logo-rounded.png"
            alt="GodderE2D Logo"
          />

          <h2 className="text-2xl">
            <strong>GodderE2D</strong>
          </h2>

          <p>A very mysterious person...</p>

          <a
            href="https://github.com/GodderE2D/godder.xyz"
            className="footer-github-link"
            title="Go to Website GitHub"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        <div>
          <span className="footer-title">Pages</span>

          <div className="link link-hover">
            <Link href="/">Home</Link>
          </div>

          <div className="link link-hover">
            <Link href="/resources">Resources</Link>
          </div>

          <div className="link link-hover">
            <a
              href="https://dsc.bio/godder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bio
            </a>
          </div>

          <div className="link link-hover">
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Latest Blog Post</span>

          {!blogData ? (
            <p>An unknown error occurred when fetching the latest blog.</p>
          ) : (
            <div className="max-w-4xl" key={blogData.slug}>
              <Link href={`/blog/${blogData.slug}`} passHref>
                <div className="grid card bg-base-300 rounded-box cursor-pointer">
                  <div className="mx-6 my-6">
                    {blogData.tags.map((tag: string) => (
                      <div key={tag} className="badge badge-success mr-2">
                        {tag}
                      </div>
                    ))}

                    <div className="h-2" />

                    <h3 className="text-2xl">
                      <strong>{blogData.title}</strong>
                    </h3>

                    <p>{blogData.description}</p>

                    <small className="opacity-60">
                      Created on {formatDate(blogData.createdAt)}
                      {blogData.createdAt === blogData.updatedAt ||
                        ` • Updated on ${formatDate(blogData.updatedAt)}`}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
