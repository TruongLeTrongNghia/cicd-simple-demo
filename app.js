const { useState, useEffect } = React;

// Clock Component - Hiển thị đồng hồ chạy thời gian thực
function Clock() {
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
        <div className="clock-container">
            <div className="clock-wrapper">
                {/* Clock Face Analog */}
                <div className="clock">
                    <div className="clock-face">
                        {/* Giờ */}
                        <div className="hour-markers">
                            {[...Array(12)].map((_, i) => {
                                const angle = (i + 1) * 30;
                                return (
                                    <div
                                        key={i}
                                        className="hour-marker"
                                        style={{
                                            transform: `rotate(${angle}deg) translateY(-80px)`
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
    return (
        <div className="app-container">
            <Clock />
        </div>
    );
}

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(<ClockApp />);
