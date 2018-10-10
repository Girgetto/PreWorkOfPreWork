import React from 'react'

export const loops = () => {
      return (
        <div>
          <div id="doc" className="markdown-body container-fluid" style={{position: 'relative'}}><p><img src="https://i.imgur.com/1QgrNNw.png" alt="Ironhack Logo" /></p><h1 id="Loops-and-Iterations"><a className="anchor hidden-xs" href="#Loops-and-Iterations" title="Loops-and-Iterations"><span className="octicon octicon-link" /></a>Loops and Iterations</h1><h2 id="Learning-Goals"><a className="anchor hidden-xs" href="#Learning-Goals" title="Learning-Goals"><span className="octicon octicon-link" /></a>Learning Goals</h2><p>After this lesson, you will be able to:</p><ul>
              <li>Explain what a loop is.</li>
              <li>Use a few different types of loops.</li>
              <li>End loops early.</li>
              <li><code>iterate</code> over each item in an array.</li>
            </ul><h2 id="What-is-a-loop"><a className="anchor hidden-xs" href="#What-is-a-loop" title="What-is-a-loop"><span className="octicon octicon-link" /></a>What is a loop?</h2><p>A loop is a sequence of instructions that is repeated until a certain condition is met. Simply put: <strong>Repeat this code until some condition is true</strong>.</p><p>The simplest example of looping is counting. Think about the process of counting. If I were to tell you “count from 1 to 10”, this makes a series of assumptions.</p><ol>
              <li>You have a <strong>starting point</strong>, 1.</li>
              <li>You have an ending point, or a <strong>condition that will be met to finish the counting</strong>. Once the number is 10, the counting is over.</li>
              <li>You <strong>increment</strong> the number by 1 each time. You could count from 1 back to -10, but you’re assuming to count upwards.</li>
            </ol><p>Counting is the perfect example of process that can be done using a loop. It’s monotonous, predictable work that is repeated until a certain condition is met.</p><p>Let’s look at how to loop and count in JavaScript.</p><h2 id="Loops-in-JavaScript"><a className="anchor hidden-xs" href="#Loops-in-JavaScript" title="Loops-in-JavaScript"><span className="octicon octicon-link" /></a>Loops in JavaScript</h2><p>You have a few different varieties of loops to chose from in JavaScript. Different loops have different strengths, but for now pick the one that makes the most sense to you.</p><h3 id="While-Loop"><a className="anchor hidden-xs" href="#While-Loop" title="While-Loop"><span className="octicon octicon-link" /></a>While Loop</h3><p>While the condition is true, repeat this code.</p><p>The while loop in JavaScript has 2 key parts:</p><ol>
              <li><strong>Condition</strong> - Once the condition is <code>false</code>, the loop ends.</li>
              <li><strong>Code to execute</strong> - The purpose behind our loop is to run some code a certain number of times.</li>
            </ol><div className="alert alert-danger">
              <p><img alt=":warning:" className="emoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/warning.png" title=":warning:" /> When using <code>while</code> loop, it is important to know that the variables inside the <strong>Condition</strong> must change! Otherwise, we will get an infinite loop and the program will crash.<br />
                <br /><br />
                <img src="http://i.giphy.com/l0Ex3IC69IK3VxULm.gif" style={{display: 'block', margin: '0 auto', width: 400, height: 250}} /></p>
            </div><p>Let’s count to 10 and print each number on its own line.</p><p><img src="https://i.imgur.com/P5LUmku.png" alt width={400} /></p><iframe height={350} src="https://repl.it/@ta_web_mad/Loops1Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
            </iframe><p>On <strong>line 5</strong> do not forget to increment the counter. Make sure that the condition in the loop turns to <code>false</code> at some point. If it doesn’t become false, it will generate an infinite loop!</p><p>In this case, the condition is false when the number is greater than 10.</p><h4 id="Exercise"><a className="anchor hidden-xs" href="#Exercise" title="Exercise"><span className="octicon octicon-link" /></a>Exercise</h4><p>In the codepen above, make the loop <em>start</em> at <strong>30</strong>, and count down to <strong>0</strong>.</p><h3 id="For-Loop"><a className="anchor hidden-xs" href="#For-Loop" title="For-Loop"><span className="octicon octicon-link" /></a>For Loop</h3><p>A <code>for</code> loop is much like the while loop, except with some of the functionality you had to do on our own baked in.</p><p>The structure of the <code>for</code> loop is much the same. You have an <strong>initial value</strong>, a <strong>condition</strong>, and some <strong>code</strong> to execute each time the loop runs (each <em>iteration</em>).</p><p>The <code>for</code> loop functions like this:</p><p><img src="https://i.imgur.com/gXnQgG6.png" alt width={400} /></p><iframe height={350} src="https://repl.it/@ta_web_mad/Loop2Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
            </iframe><p>With either loop, you don’t have to use numbers. You can use any character, and any condition.</p><p>Let’s say you want to create a character representation of a staircase:</p><iframe height={350} src="https://repl.it/@ta_web_mad/Loop3Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
            </iframe><div className="alert alert-info">
              <p>In practise in your for loop, you will generally have a variable <code>i</code> , that will be a number and that will be incremented by 1 on each iteration.</p>
              <pre><code className="javascript hljs"><span className="token keyword">var</span> nbOfLoops <span className="token operator">=</span> <span className="token number">42</span><span className="token punctuation">;</span>{"\n"}<span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token keyword">var</span> i <span className="token operator">=</span> <span className="token number">0</span><span className="token punctuation">;</span> i <span className="token operator">&lt;</span> nbOfLoops<span className="token punctuation">;</span> i<span className="token operator">++</span><span className="token punctuation">)</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}<span className="token comment">// Your instructions</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre>
            </div><h3 id="Exercise1"><a className="anchor hidden-xs" href="#Exercise1" title="Exercise1"><span className="octicon octicon-link" /></a>Exercise</h3><p>Using a for loop, display a countdown from 10 to 0. You will need to write <code>i--</code> in your for loop.</p><pre><code>10{"\n"}9{"\n"}8{"\n"}7{"\n"}6{"\n"}5{"\n"}4{"\n"}3{"\n"}2{"\n"}1{"\n"}0{"\n"}Boom!{"\n"}</code></pre><h2 id="Nested-loops"><a className="anchor hidden-xs" href="#Nested-loops" title="Nested-loops"><span className="octicon octicon-link" /></a>Nested loops</h2><p>In any code block, you can create any JavaScript statement. This means that, inside an <code>if</code> block you can have nested <code>if</code> blocks, or loop blocks, or any other kind of block. The same logic applies to looping:</p><iframe height={350} src="https://repl.it/@ta_web_mad/Loop4Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
            </iframe><h2 id="Ending-Loops-Early-or-skipping-to-the-next"><a className="anchor hidden-xs" href="#Ending-Loops-Early-or-skipping-to-the-next" title="Ending-Loops-Early-or-skipping-to-the-next"><span className="octicon octicon-link" /></a>Ending Loops Early (or skipping to the next)</h2><p>Sometimes you need to end a loop early, or skip to the next iteration of the loop. This can be done with <code>break</code> and <code>continue</code> respectively. Let’s look at examples of both.</p><h3 id="Break"><a className="anchor hidden-xs" href="#Break" title="Break"><span className="octicon octicon-link" /></a>Break</h3><p>If you want to end a loop execution early, you can use the <code>break</code> keyword.</p><iframe height={350} src="https://repl.it/@ta_web_mad/Loop5Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
            </iframe><div className="alert alert-danger">
              <p><img alt=":bomb:" className="emoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/bomb.png" title=":bomb:" /> It is typically not recommended to use <code>break</code> in loops. There’s typically a better or simpler way.</p>
              <p>For instance, the previous example would be written as so:</p>
              <pre><code className="javascript hljs"><span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token keyword">var</span> i <span className="token operator">=</span> <span className="token number">1</span><span className="token punctuation">;</span> i <span className="token operator">&lt;</span> <span className="token number">21</span><span className="token punctuation">;</span> i<span className="token operator">++</span><span className="token punctuation">)</span><span className="token punctuation">{"{"}</span>{"\n"}{"  "}console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>i<span className="token punctuation">)</span><span className="token punctuation">;</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}{"\n"}console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">"TWENTY ONE! BlackJack."</span><span className="token punctuation">)</span>{"\n"}</code></pre>
            </div><h3 id="Continue"><a className="anchor hidden-xs" href="#Continue" title="Continue"><span className="octicon octicon-link" /></a>Continue</h3><p>Sometimes you want to skip an iteration in a loop and <strong>continue</strong> to the next. If so, use the <code>continue</code> keyword in your loop combined with some sort of condition. Let’s skip all the numbers that are multiples of 3.</p><iframe height={350} src="https://repl.it/@ta_web_mad/Loop6Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
            </iframe><h2 id="Exercise2"><a className="anchor hidden-xs" href="#Exercise2" title="Exercise2"><span className="octicon octicon-link" /></a>Exercise</h2><p>Let’s create another game of multiples, similar to <a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank">FizzBuzz</a>:</p><ul>
              <li>Print the numbers 1 through 50.</li>
              <li>If the number is divisible by 7, you must skip the next number.</li>
              <li>If the number is divisible by 10 or 15, you must print “Donkey!”.</li>
              <li>If the number is not divisible by 2 and the previous number is divisible by 10, you must print “Monkey!”.</li>
            </ul><h2 id="Summary"><a className="anchor hidden-xs" href="#Summary" title="Summary"><span className="octicon octicon-link" /></a>Summary</h2><p>In this lesson, you have learnt all about loops and iterations. Coding is here to make our lives easier and automate repetitive tasks.</p><p>Loops are one way of doing this. Without loops, you’d be writing hundreds of lines to perform a simple task, and that’s awful. Loops will also be one of the most frequently used structures in your programming career, so you will have plenty of practice!</p><h2 id="Extra-Resources"><a className="anchor hidden-xs" href="#Extra-Resources" title="Extra-Resources"><span className="octicon octicon-link" /></a>Extra Resources</h2><ul>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" target="_blank">MDN For loop</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" target="_blank">MDN While loop</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">MDN forEach</a></li>
              <li><a href="http://www.tutorialspoint.com/javascript/javascript_loop_control.htm" target="_blank">JavaScript Loop Control</a></li>
            </ul></div>
          <div className="ui-toc dropup unselectable hidden-print" style={{display: 'none'}}>
            <div className="pull-right dropdown">
              <a id="tocLabel" className="ui-toc-label btn btn-default" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" title="Table of content">
                <i className="fa fa-bars" />
              </a>
              <ul id="ui-toc" className="ui-toc-dropdown dropdown-menu" aria-labelledby="tocLabel">
                <div className="toc"><ul className="nav"><li className><a href="#Loops-and-Iterations" title="Loops and Iterations">Loops and Iterations</a><ul className="nav"><li className><a href="#Learning-Goals" title="Learning Goals">Learning Goals</a></li><li className><a href="#What-is-a-loop" title="What is a loop?">What is a loop?</a></li><li><a href="#Loops-in-JavaScript" title="Loops in JavaScript">Loops in JavaScript</a><ul className="nav"><li><a href="#While-Loop" title="While Loop">While Loop</a></li><li><a href="#For-Loop" title="For Loop">For Loop</a></li><li><a href="#Exercise1" title="Exercise">Exercise</a></li></ul></li><li><a href="#Nested-loops" title="Nested loops">Nested loops</a></li><li className><a href="#Ending-Loops-Early-or-skipping-to-the-next" title="Ending Loops Early (or skipping to the next)">Ending Loops Early (or skipping to the next)</a><ul className="nav"><li className><a href="#Break" title="Break">Break</a></li><li><a href="#Continue" title="Continue">Continue</a></li></ul></li><li><a href="#Exercise2" title="Exercise">Exercise</a></li><li><a href="#Summary" title="Summary">Summary</a></li><li className><a href="#Extra-Resources" title="Extra Resources">Extra Resources</a></li></ul></li></ul></div><div className="toc-menu"><a className="expand-toggle" href="#">Expand all</a><a className="back-to-top" href="#">Back to top</a><a className="go-to-bottom" href="#">Go to bottom</a></div>
              </ul>
            </div>
          </div>
          <div id="ui-toc-affix" className="ui-affix-toc ui-toc-dropdown unselectable hidden-print" data-spy="affix" style={{top: 17, display: 'none'}}>
            <div className="toc"><ul className="nav"><li className><a href="#Loops-and-Iterations" title="Loops and Iterations">Loops and Iterations</a><ul className="nav"><li className><a href="#Learning-Goals" title="Learning Goals">Learning Goals</a></li><li className><a href="#What-is-a-loop" title="What is a loop?">What is a loop?</a></li><li><a href="#Loops-in-JavaScript" title="Loops in JavaScript">Loops in JavaScript</a><ul className="nav"><li><a href="#While-Loop" title="While Loop">While Loop</a></li><li><a href="#For-Loop" title="For Loop">For Loop</a></li><li><a href="#Exercise1" title="Exercise">Exercise</a></li></ul></li><li><a href="#Nested-loops" title="Nested loops">Nested loops</a></li><li className><a href="#Ending-Loops-Early-or-skipping-to-the-next" title="Ending Loops Early (or skipping to the next)">Ending Loops Early (or skipping to the next)</a><ul className="nav"><li className><a href="#Break" title="Break">Break</a></li><li><a href="#Continue" title="Continue">Continue</a></li></ul></li><li><a href="#Exercise2" title="Exercise">Exercise</a></li><li><a href="#Summary" title="Summary">Summary</a></li><li className><a href="#Extra-Resources" title="Extra Resources">Extra Resources</a></li></ul></li></ul></div><div className="toc-menu"><a className="expand-toggle" href="#">Expand all</a><a className="back-to-top" href="#">Back to top</a><a className="go-to-bottom" href="#">Go to bottom</a></div>
          </div>
        </div>
      );
  };