const { useState, useEffect } = React;

// Clock Component - Hiển thị đồng hồ chạy thời gian thực
function Clock({ theme }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Lấy giá trị giờ, phút, giây
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    // Tính toán góc xoay cho từng kim
    const secondDegrees = (seconds + milliseconds / 1000) * 6; // 360/60 = 6
    const minuteDegrees = (minutes + seconds / 60) * 6;
    const hourDegrees = (hours % 12 + minutes / 60) * 30; // 360/12 = 30

    // Format time hiển thị
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const dateString = time.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className={`clock-container theme-${theme}`}>
            <div className="clock-wrapper">
                {/* Clock Face Analog */}
                <div className={`clock theme-${theme}`}>
                    <div className={`clock-face theme-${theme}`}>
                        {/* Giờ */}
                        <div className="hour-markers">
                            {[...Array(12)].map((_, i) => {
                                const angle = (i + 1) * 30;
                                return (
                                    <div
                                        key={i}
                                        className="hour-marker flip-card"
                                        style={{
                                            transform: `rotate(${angle}deg) translateY(-120px)`
                                        }}
                                    >
                                        <span style={{ transform: `rotate(-${angle}deg)` }}>
                                            {i + 1}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Kim giờ */}
                        <div
                            className="hand hour-hand"
                            style={{
                                transform: `rotate(${hourDegrees}deg)`
                            }}
                        />

                        {/* Kim phút */}
                        <div
                            className="hand minute-hand"
                            style={{
                                transform: `rotate(${minuteDegrees}deg)`
                            }}
                        />

                        {/* Kim giây */}
                        <div
                            className="hand second-hand"
                            style={{
                                transform: `rotate(${secondDegrees}deg)`
                            }}
                        />

                        {/* Tâm đồng hồ */}
                        <div className="center-dot" />
                    </div>
                </div>
            </div>

            {/* Digital Time Display */}
            <div className="digital-display">
                <div className="time-display">{timeString}</div>
                <div className="date-display">{dateString}</div>
            </div>
        </div>
    );
}

// Main App
function ClockApp() {
    const [theme, setTheme] = useState('dark'); // 'dark', 'sky', 'sunset'

    const themes = [
        { id: 'dark', name: '🌙 Đêm' },
        { id: 'sky', name: '🌅 Trời Xanh' },
        { id: 'sunset', name: '🌅 Chiều Tà' }
    ];

    const nextTheme = () => {
        const currentIndex = themes.findIndex(t => t.id === theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex].id);
    };

    return (
        <div className={`app-container theme-${theme}`}>
            <Clock theme={theme} />
            
            {/* Theme Selector */}
            <div className="theme-selector">
                <button className="theme-btn" onClick={nextTheme}>
                    →
                </button>
                <div className="theme-indicators">
                    {themes.map(t => (
                        <div
                            key={t.id}
                            className={`theme-indicator ${theme === t.id ? 'active' : ''}`}
                            title={t.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(<ClockApp />);
