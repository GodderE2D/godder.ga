import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { InformationCircleOutline, FileTrayOutline } from 'react-ionicons';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | GodderE2D</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <div className="h-16" />

      <div>
        <div className="flex-col justify-center flex items-center lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">
              Hey there, Godder here.
            </h1>

            <p className="mb-5">
              I&apos;m just a not-so-ordinary human being on the internet.
              <br />
              Nice to meet you!
            </p>

            <div>
              <span className="text-5xl opacity-60">
                <strong>“</strong>
              </span>

              <span className="mx-4">
                Someday this will actually be something, but that day is not today.
              </span>

              <span className="text-5xl opacity-60">
                <strong>”</strong>
              </span>
            </div>

            <div className="h-5" />

            <div className="opacity-60">
              <em className="inline">
                — GodderE2D
              </em>

              <div data-tip="
                You found my custom status! This changes periodically, and take everything I say with a grain of salt 🧂
              " className="tooltip tooltip-info tooltip-right">
                <InformationCircleOutline cssClasses="inline ml-2" color="#2194f3" />
              </div>
            </div>

            <div className="h-8" />

            <div className="btn btn-primary btn-wide">
              <Link href="/resources" passHref>
                <span>
                  <FileTrayOutline cssClasses="inline mr-2" color="#f9fafb" />
                  <span className="inline">Resources</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
