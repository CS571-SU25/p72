import React from 'react';
import { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "../navbar";
import './eaToday.css';


function EaToday() {
    
    const [savedTeams, setSavedTeams] = useState([]);
    
    
    const [expandedTeamId, setExpandedTeamId] = useState(null);
    
    
    useEffect(() => {
        const storedTeams = localStorage.getItem('savedF1Teams');
        
        if (storedTeams) {
            try {
                
                const savedTeamObjects = JSON.parse(storedTeams);
                
                
                setSavedTeams(savedTeamObjects);
            } catch (error) {
                console.error('Error loading saved teams:', error);
                
                localStorage.removeItem('savedF1Teams');
            }
        }
    }, []); 

    
    
    const handleSaveClick = (team) => {
        
        const currentSavedTeams = [...savedTeams];
        
        
        const teamIndex = currentSavedTeams.findIndex(savedTeam => savedTeam.id === team.id);
        
        if (teamIndex !== -1) {
            
            currentSavedTeams.splice(teamIndex, 1);
        } else {
            
            currentSavedTeams.push(team);
        }
        
        
        
        
        localStorage.setItem('savedF1Teams', JSON.stringify(currentSavedTeams));
        
       
        setSavedTeams(currentSavedTeams);
    };
    
    
    const handleDetailsClick = (teamId) => {
        // 切换所点击车队的展开状态
        setExpandedTeamId(expandedTeamId === teamId ? null : teamId);
    };

    return (
        <section id="eatoday" className="eatoday-container" data-nav-section>
            <Navbar />
            
            {/* 已保存车队展示部分 */}
            <section className="saved-teams">
                <div className="container">
                    <h2>已保存的车队</h2>
                    
                    {savedTeams.length > 0 ? (
                        // 如果有已保存的车队，显示它们
                        <div className="saved-teams-grid">
                            {savedTeams.map((team) => (
                                <div key={team.id} className="team-card">
                                    <div className="team-image-container">
                                        <img 
                                            src={team.image} 
                                            alt={team.name} 
                                            className="team-image"
                                        />
                                    </div>
                                    <div className="team-info">
                                        <h2 className="team-name">{team.name}</h2>
                                        <p className="team-drivers">driver: {team.drivers.join(', ')}</p>
                                        {/* 条件渲染描述 */}
                                        {expandedTeamId === team.id && (
                                            <p className="team-description">{team.description}</p>
                                        )}
                                        <div className="team-actions">
                                            <button 
                                                className="btn-details" 
                                                onClick={() => handleDetailsClick(team.id)}
                                            >
                                                {expandedTeamId === team.id ? "Hide details" : "details"}
                                            </button>
                                            <button 
                                                className={`btn-save ${true ? 'saved' : ''}`} // 这里总是显示为已保存状态
                                                onClick={() => handleSaveClick(team)}
                                            >
                                                <i className="heart-icon">❤️</i> 
                                                已保存
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // 如果没有已保存的车队，显示提示信息
                        <div className="no-saved-teams">
                            <p>You have not saved any fleet. Go to<a href="#home">home page</a>Browse and save your favorite fleets now!</p>
                        </div>
                    )}
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

export default EaToday;