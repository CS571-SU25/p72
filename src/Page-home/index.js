import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './home.css';
import Navbar from '../navbar';
import teams from '../data/teams';

function Home() {
    const [expandedTeamId, setExpandedTeamId] = React.useState(null);
    const [savedTeams, setSavedTeams] = React.useState([]);
    
    // 初始化useNavigate钩子
    const navigate = useNavigate();
    
    React.useEffect(() => {
        const storedTeams = localStorage.getItem('savedF1Teams');
        if (storedTeams) {
            try {
                const savedTeams = JSON.parse(storedTeams);
                setSavedTeams(savedTeams);
            } catch (error) {
                console.error('Error loading saved teams:', error);
                localStorage.removeItem('savedF1Teams');
            }
        }
    }, []);

    const handleDetailsClick = (teamId) => {
        setExpandedTeamId(expandedTeamId === teamId ? null : teamId);
    };
    
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

    // 处理历史数据按钮点击事件
    const handleHistoryClick = (team) => {
        navigate('/echoArk', { state: { team } });
    };

    return (
        <div className='home'>
            <div className="content-layer">
                <Navbar />
                <main className='mainContent-bg'>
                    <section className="mainContent">
                        <div className="teams-container">
                            {teams.map((team) => (
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
                                        <p className="team-drivers">Drivers: {team.drivers.join(', ')}</p>
                                        
                                        {/* 条件渲染描述 */}
                                        {expandedTeamId === team.id && (
                                            <p className="team-description">{team.description}</p>
                                        )}
                                        
                                        <div className="team-actions">
                                            <button 
                                                className="btn-details" 
                                                onClick={() => handleDetailsClick(team.id)}
                                            >
                                                {expandedTeamId === team.id ? "Hide Details" : "Details"}
                                            </button>
                                            <button 
                                                className={`btn-save ${savedTeams.some(savedTeam => savedTeam.id === team.id) ? 'saved' : ''}`}
                                                onClick={() => handleSaveClick(team)}
                                            >
                                                <i className="heart-icon">❤️</i> 
                                                {savedTeams.some(savedTeam => savedTeam.id === team.id) ? "Saved" : "Save"}
                                            </button>
                                            {/* 添加历史数据按钮 */}
                                            <button 
                                                className="btn-history"
                                                onClick={() => handleHistoryClick(team)}
                                            >
                                                <i className="history-icon">📜</i> 
                                                History
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Home;