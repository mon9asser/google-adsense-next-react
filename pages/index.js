// External Imports
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { AdSenseUnit } from "../components/AdSebseUnit";
// Internal Imports
import styles from "../src/app/page.module.css";

// Fetch Data with getServerSideProps
export async function getServerSideProps() {
  try {
     

    console.log(ads);
    return { props: { ads: [] } };
  } catch (error) {
    console.error("Axios request failed:", error.message);
    console.error("Error details:", error.stack);

    return { props: { ads: [], error: "Failed to fetch ads. Please try again later." } };
  }
}

// Home Component
export default function Home({ ads, adsReady }) {


  // State Variables
  const [wordsCount, setWordsCount] = useState(1);
  const [textarea, setTextArea] = useState("");

  // Callback Function to Calculate Words
  const handleTextChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/);
    setWordsCount(words.length);
    setTextArea(value);
  };
 

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Column 1: Main Content */}
        <div className={styles.col1}>

          <AdSenseUnit
            adsReady={adsReady} 
            data-ad-client="ca-pub-4846779075023104"
            data-ad-slot="4803372793"
            data-ad-format="auto"
            data-full-width-responsive="true"
            style={{
              display: "block",
              width: "100%", // Adjust based on your layout     
            }}
          />
          
          {/* Placeholder Image */}
          <img
            className="img"
            src="https://placehold.co/1200x600"
            alt="Placeholder"
            width="1200"
            height="600"
          />

          {/* Word Counter Section */}
          <h1>Word Counter</h1>
          <div>
            <textarea 
              onChange={handleTextChange}
              value={textarea}
              placeholder="Insert your article or text here"
            ></textarea>
          </div>
          <div>Number of words: {wordsCount}</div>
          <AdSenseUnit
            adsReady={adsReady} 
            data-ad-client="ca-pub-4846779075023104"
            data-ad-slot="3681862813"
            data-ad-format="auto"
            data-full-width-responsive="true"
            style={{
              display: "block",
              width: "100%", // Adjust based on your layout   
            }}
          />
          {/* Article Content */}
          <div className={styles.contents}>
            <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>
            <AdSenseUnit
            adsReady={adsReady} 
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-4846779075023104"
            data-ad-slot="4561859900"
            style={{
              display: "block",
              width: "100%", // Adjust based on your layout      
            }}
          />
            <h3>What is a Word Counter App?</h3>
            <p>
              A word counter app is a simple tool that counts the number of words in a given text.
              This application can often do more than just count words; it may also provide counts
              for characters, sentences, paragraphs, and even offer readability insights. At its
              core, however, it’s focused on word counting to help users easily stay on top of text
              length requirements or targets.
            </p>

            <h3>Why Use a Word Counter App?</h3>
            <p>
              The most obvious use of a word counter app is for writers who need to hit specific
              word count targets. For example, many essays, blog posts, articles, and even social
              media captions have word count requirements. Without a tool to count words, writers
              might end up underestimating or exceeding the length, leading to additional editing or
              rewriting.
            </p>
            <p>
              Besides writers, a word counter is useful for students who need to meet specific
              assignment guidelines, journalists aiming to keep their articles concise, or anyone
              working with large amounts of text. Additionally, a word counter app can help with
              SEO, as maintaining optimal word counts is often essential for search engine
              optimization.
            </p>

            <h3>Features to Include in a Word Counter App</h3>
            <p>
              A basic word counter app can be built with just a few essential features. However,
              more advanced functionalities can improve the user experience and provide valuable
              insights. Here are some features you might consider including:
            </p>
            <ul>
              <li>
                <strong>Word Count:</strong> The primary feature that displays the total word count
                of the text input.
              </li>
              <li>
                <strong>Character Count:</strong> This feature counts the number of characters,
                which is helpful for social media posts with character limits.
              </li>
              <li>
                <strong>Sentence Count:</strong> Knowing the number of sentences can be helpful for
                readability and grammar analysis.
              </li>
              <li>
                <strong>Paragraph Count:</strong> This can give insights into the structure of the
                text, useful for longer articles or documents.
              </li>
              <li>
                <strong>Readability Score:</strong> A readability score evaluates how easy the text
                is to read, often helpful for writers targeting a specific audience.
              </li>
              <li>
                <strong>Keyword Density:</strong> For SEO and keyword optimization, this feature
                shows how often specific words appear in the text.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              A word counter app is a simple yet powerful tool that can be beneficial for many types
              of users. From writers to students, and even marketers, tracking word count is
              essential for meeting content length requirements and improving readability. Building
              a word counter app with HTML, CSS, and JavaScript is an excellent beginner project
              that reinforces key programming concepts.
            </p>
          </div>
        </div>

        {/* Column 2: Sidebar */}
        <div className={styles.col2}>
        <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>
            <AdSenseUnit
            adsReady={adsReady} 
            data-ad-client="ca-pub-4846779075023104"
            data-ad-slot="4360661570"
            data-ad-format="auto"
            data-full-width-responsive="true"            style={{
              display: "block",
              width: "100%", // Adjust based on your layout 
            }}
          />
            <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>

            <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>

            <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>

            <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>

            <p>
              Have you ever found yourself needing to quickly count the words in a document or block
              of text? A word counter app can be incredibly helpful for writers, students, and
              professionals who work with text and need to monitor word counts. Whether it’s for
              meeting essay requirements, tracking blog post lengths, or ensuring conciseness in
              communication, a word counter app can be a great asset.
            </p>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>©2024 Codedtag. All rights reserved.</footer>
    </div>
  );
}
