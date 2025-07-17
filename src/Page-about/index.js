import React from 'react';
import './about.css';
import Navbar from '../navbar';

import { useRef, useState } from 'react';
import img1 from "../data/assets/images/alpine.jpg"


import img2 from "../data/assets/images/astonmartin.jpg"


import img3 from "../data/assets/images/ferrari.jpg"

function About() {
    // 可以用于未来添加交互功能，如滚动动画等
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // 当组件加载时，可以设置一些初始状态或执行动画
    // 这里只是一个示例，您可以根据需要实现滚动动画等功能
    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="aboutme" className={`aboutme-container ${isVisible ? 'visible' : ''}`} data-nav-section>
            <Navbar />
            
            
            
            {/* 平台介绍部分 */}
            <section className="platform-intro">
                <div className="container">
                    <h2>About our platform</h2>
                    <div className="intro-content">
                        <div className="intro-text">
                            <p>
                                F1 Fans Exchange is an online community for Formula 1 fans. Whether you are a senior fan or a newcomer to Formula 1, 
                                is the ideal place for you to get information, share ideas and communicate with other fans.
                            </p>
                            <p>
                                We provide the latest F1 news, driver news, team information, technical analysis and race predictions, etc. 
                                also has a forum area where you can have in-depth discussions with other fans on topics of interest to you.
                            </p>
                        </div>
                        <div className="intro-image">
                            
                            
                            
                            <img src={img1} alt="F1 Fan Community" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* F1赛事介绍部分 */}
            <section className="f1-intro">
                <div className="container">
                    <h2>Learn about the Formula 1 World Championship</h2>
                    <div className="f1-content">
                        <div className="f1-info-cards">
                            {/* 卡片1: 赛事历史 */}
                            <div className="f1-card">
                                <div className="f1-card-image">
                                    <img src={img3} alt="F1 History" />
                                </div>
                                <div className="f1-card-content">
                                    <h3>The History and Legacy of F1</h3>
                                    <p>
                                        Formula One (F1) is the world's highest level of single-seat racing competition, which began in 1950.
                                        Over the years, F1 has witnessed the rise and fall of countless legendary drivers and teams, and has accumulated a rich history and cultural heritage.
                                    </p>
                                    <a href="#" className="read-more">Learn more →</a>
                                </div>
                            </div>
                            
                            {/* 卡片2: 赛事规则 */}
                            <div className="f1-card">
                                <div className="f1-card-image">
                                    <img src={img2} alt="F1 rules" />
                                </div>
                                <div className="f1-card-content">
                                    <h3>F1 Racing Rules</h3>
                                    <p>
                                        Formula 1 has a complex system of race rules, including technical rules, race rules, points system and so on.
                                        Understanding these rules can help you better understand the process and results of the race.
                                    </p>
                                    <a href="#" className="read-more">Learn more →</a>
                                </div>
                            </div>
                            
                            {/* 卡片3: 赛季结构 */}
                            <div className="f1-card">
                                
                                
                                <div className="f1-card-image">
                                    
                                    
                                    <img src={img1} alt="Formula season" />
                                </div>
                                <div className="f1-card-content">
                                    <h3>F1 season structure</h3>
                                    <p>
                                        The Formula One season usually starts in March and ends in November, with more than 20 races spread around the world.
                                        Each race is called a “Grand Prix” and consists of three parts: practice, qualifying and the main race.
                                    </p>
                                    <a href="#" className="read-more">Learn more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 平台功能部分 */}
            <section className="platform-features">
                <div className="container">
                    <h2>Our Platform Features</h2>
                    <div className="features-grid">
                        {/* 功能1: 实时讨论 */}
                        <div className="feature-item">
                            <div className="feature-icon">💬</div>
                            <h3>Live discussion</h3>
                            <p>
                                During the race, you can communicate with other fans in real time and share your views and feelings.
                                Our live chat rooms make sure you don't miss a moment of the action.
                            </p>
                        </div>
                        
                        {/* 功能2: 赛事预测 */}
                        <div className="feature-item">
                            <div className="feature-icon">🔮</div>
                            <h3>Race Predictions</h3>
                            <p>
                                Before each race, you can predict race results, fastest lap times, podium finishes and more. 
                                Compete with other fans on the accuracy of your predictions to win points and prizes.
                            </p>
                        </div>
                        
                        {/* 功能3: 车队车手数据 */}
                        <div className="feature-item">
                            <div className="feature-icon">📊</div>
                            <h3>Team Driver Data</h3>
                            <p>
                                We provide comprehensive team and driver statistics, including historical results, current season performance, 
                                technical data and more to help you gain insight into all aspects of Formula One.
                            </p>
                        </div>
                        
                        {/* 功能4: 赛事回顾 */}
                        <div className="feature-item">
                            <div className="feature-icon">📺</div>
                            <h3>Race Review</h3>
                            <p>
                                Missed the action? Don't worry! We offer detailed race recaps, including 
                                race highlights, data analysis, driver interviews and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            
            
            {/* 加入我们部分 */}
            <section className="join-us">
                <div className="container">
                    <h2>Join our F1 fan community</h2>
                    <div className="join-content">
                        <div className="join-text">
                            <p>
                                Whether you're a Formula 1 veteran or a newcomer just starting to follow the excitement of the sport, 
                                welcomes you to our platform. Here you can:
                            </p>
                            <ul>
                                <li>Talking and discussing with other enthusiasts</li>
                                <li>Get the latest F1 news</li>
                                <li>Participate in race predictions and discussions</li>
                                <li>An in-depth look at the history and rules of F1</li>
                                <li>Share your love and insights about F1</li>
                            </ul>
                            <p>Sign up now and become part of our F1 fan community!</p>
                        </div>
                        <div className="join-button">
                            {/* <button className="btn-primary">立即加入</button> */}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 页脚部分 */}
            <footer className="about-footer">
                <div className="container">
                    
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} A platform for F1 fans to communicate with each other. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default About;