import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "../navbar";
import './echoArk.css';

function EaToday() {
    
    const [currentTeam, setCurrentTeam] = useState(null);
    
    
    const location = useLocation();
    
    
    React.useEffect(() => {
        if (location.state && location.state.team) {
            setCurrentTeam(location.state.team);
        }
    }, [location.state]);
    
    
    const handleDetailsClick = (teamId) => {
        console.log(`Details clicked for team ${teamId}`);
    };

    return (
        <section id="eatoday" className="eatoday-container" data-nav-section>
            <Navbar />
            
            {/* 如果有从Home页面传递过来的团队数据，显示历史数据表格 */}
            {currentTeam && currentTeam.teamArr && (
                <div className="team-history-container">
                    <h2 className="team-history-title">{currentTeam.name} Historical data</h2>
                    
                    <table className="team-history-table">
                        <thead>
                            <tr>
                                <th>year</th>
                                <th>engine</th>
                                <th>driver</th>
                                <th>credits</th>
                                <th>rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTeam.teamArr.map((season, index) => (
                                <tr key={index}>
                                    <td>{season.year}</td>
                                    <td>{season.engine}</td>
                                    <td>{season.drivers.join(' / ')}</td>
                                    <td>{season.points}</td>
                                    <td>{season.position}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            {/* 如果没有teamArr数据，显示提示信息 */}
            {currentTeam && (!currentTeam.teamArr || currentTeam.teamArr.length === 0) && (
                <div className="no-data-message">
                    <p>No historical data</p>
                </div>
            )}
            
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