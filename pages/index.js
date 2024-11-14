"use client" 

import Image from "next/image";
import styles from "../src/app/page.module.css";
import React from "react";

export default function Home() {
  
  var [wordsCount, setWordsCount] = React.useState(1)
  var [textarea, setTextArea] = React.useState('');

  React.useEffect(() => {
    try {
      if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("Adsense error:", error);
    }
  }, []);


  var callback_to_calculate = (e) => {

    var value = e.target.value;
    const words = value.trim().split(/\s+/);
    setWordsCount(words.length);
    setTextArea(value);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main} style={{width: '100%'}}>
          <h1>
            Word Counter
          </h1> 

          <div style={{marginTop: '15px', width: '100%', display: 'block'}}>
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-4846779075023104"
            data-ad-slot="1877334005"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          </div>
            
          <div>
            <textarea 
              style={{width: '100%', minHeight: '500px', border: '1px solid #dfdfdf', padding: '15px', resize: 'vertical'}}
              onChange={e => callback_to_calculate(e)}
              value={textarea}
              placeholder="Insert your article here or text here"></textarea>
          </div> 
          <div>
            Number of words: {wordsCount}
          </div>  

         
          <div className={styles.contents}>
              <p>Have you ever found yourself needing to quickly count the words in a document or block of text? A word counter app can be incredibly helpful for writers, students, and professionals who work with text and need to monitor word counts. Whether it’s for meeting essay requirements, tracking blog post lengths, or ensuring conciseness in communication, a word counter app can be a great asset.</p>

              <h3>What is a Word Counter App?</h3>
              <p>A word counter app is a simple tool that counts the number of words in a given text. This application can often do more than just count words; it may also provide counts for characters, sentences, paragraphs, and even offer readability insights. At its core, however, it’s focused on word counting to help users easily stay on top of text length requirements or targets.</p>

              <h3>Why Use a Word Counter App?</h3>
              <p>The most obvious use of a word counter app is for writers who need to hit specific word count targets. For example, many essays, blog posts, articles, and even social media captions have word count requirements. Without a tool to count words, writers might end up underestimating or exceeding the length, leading to additional editing or rewriting.</p>
              <p>Besides writers, a word counter is useful for students who need to meet specific assignment guidelines, journalists aiming to keep their articles concise, or anyone working with large amounts of text. Additionally, a word counter app can help with SEO, as maintaining optimal word counts is often essential for search engine optimization.</p>

              <h3>Features to Include in a Word Counter App</h3>
              <p>A basic word counter app can be built with just a few essential features. However, more advanced functionalities can improve the user experience and provide valuable insights. Here are some features you might consider including:</p>
              <div style={{marginTop: '15px', width: '100%', display: 'block'}}>
                <ins className="adsbygoogle"
                        style={{ display: 'block', textAlign: 'center' }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-4846779075023104"
                        data-ad-slot="5512663971"></ins>
                </div>
              <ul>
                <li><strong>Word Count:</strong> The primary feature that displays the total word count of the text input.</li>
                <li><strong>Character Count:</strong> This feature counts the number of characters, which is helpful for social media posts with character limits.</li>
                <li><strong>Sentence Count:</strong> Knowing the number of sentences can be helpful for readability and grammar analysis.</li>
                <li><strong>Paragraph Count:</strong> This can give insights into the structure of the text, useful for longer articles or documents.</li>
                <li><strong>Readability Score:</strong> A readability score evaluates how easy the text is to read, often helpful for writers targeting a specific audience.</li>
                <li><strong>Keyword Density:</strong> For SEO and keyword optimization, this feature shows how often specific words appear in the text.</li>
              </ul>

              <h3>Building a Basic Word Counter App in JavaScript</h3>
              <p>Let’s take a look at how you could create a simple word counter app using HTML, CSS, and JavaScript. This example will keep it straightforward, focusing on word and character counting.</p>

              <h3>Step 1: Setting Up the HTML Structure</h3>
              <p>First, we’ll create the structure of our app with a text area for input and a section to display the results. Here’s the basic HTML structure:</p>
                
             

              <p>This HTML provides a simple layout with a text area for users to type or paste text. The word and character counts will be displayed in the <code>&lt;span&gt;</code> elements within the output <code>&lt;div&gt;</code>.</p>

              <h3>Step 2: Adding Basic CSS</h3>
              <p>Let’s style the word counter app with a bit of CSS to make it look clean and user-friendly.</p>

               

              <p>This CSS centers the app, styles the text area, and adjusts the font for readability. Feel free to adjust these styles to match your own design preferences.</p>

              <h3>Step 3: Adding JavaScript for Word and Character Count</h3>
              <p>Now we’ll write JavaScript to update the word and character counts in real-time. This script listens for changes in the text area and updates the counts accordingly.</p>

               

              <p>This JavaScript code counts words by trimming whitespace, splitting the text by spaces, and filtering out any empty strings. The character count is simply the length of the text string. As the user types or pastes text, the event listener updates the counts instantly.</p>

              <h3>Extending the Word Counter App with Additional Features</h3>
              <p>If you want to make your word counter app even more robust, consider adding the following features:</p>

              <ul>
                <li><strong>Sentence Counting:</strong> You can count sentences by splitting the text based on punctuation such as periods, exclamation marks, or question marks.</li>
                <li><strong>Readability Score:</strong> Calculate readability by assessing sentence length and word complexity. Libraries like <code>readability-score</code> in JavaScript can help automate this calculation.</li>
                <li><strong>Keyword Density:</strong> To add keyword density, create an object that tracks the frequency of each word. This is especially useful for content creators working with SEO.</li>
              </ul>

              <h3>Conclusion</h3>
              <p>A word counter app is a simple yet powerful tool that can be beneficial for many types of users. From writers to students, and even marketers, tracking word count is essential for meeting content length requirements and improving readability. With this guide, you have a basic structure to start with, and you can expand it by adding more advanced features like readability scores and keyword density calculations.</p>
              <p>Building a word counter app with HTML, CSS, and JavaScript is an excellent beginner project that reinforces key programming concepts. By customizing and expanding the app, you can also learn valuable techniques related to string manipulation and real-time user interface updates.</p>

              <div style={{marginTop: '15px', width: '100%', display: 'block'}}>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-format="autorelaxed"
                    data-ad-client="ca-pub-4846779075023104"
                    data-ad-slot="4561859900"></ins>
                </div>
          </div>
      </main>
      <footer className={styles.footer}>
        ©2024 Codedtag. All rights reserved.
      </footer>
    </div>
  );
}
