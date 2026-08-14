const { useState } = React;

// Blog Post Component
function BlogPost({ post }) {
    return (
        <article className="blog-post">
            <div className="post-header">
                <span className="post-category">{post.category}</span>
                <h2 className="post-title">{post.title}</h2>
                <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-reading-time">📖 {post.readingTime} phút đọc</span>
                </div>
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-tags">
                {post.tags.map((tag, idx) => (
                    <span key={idx} className="tag">#{tag}</span>
                ))}
            </div>
            <a href="#" className="read-more">Đọc thêm →</a>
        </article>
    );
}

// Sidebar Component
function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="about-box">
                <h3>👨‍💻 Về tôi</h3>
                <p>Kỹ sư DevOps & CI/CD enthusiast. Chia sẻ kinh nghiệm về tự động hoá quy trình phát triển phần mềm.</p>
            </div>
            
            <div className="categories-box">
                <h3>📂 Chuyên mục</h3>
                <ul>
                    <li><a href="#">CI/CD Pipeline</a></li>
                    <li><a href="#">Docker & Kubernetes</a></li>
                    <li><a href="#">GitHub Actions</a></li>
                    <li><a href="#">Deployment</a></li>
                    <li><a href="#">Monitoring</a></li>
                </ul>
            </div>

            <div className="newsletter-box">
                <h3>📧 Đăng ký</h3>
                <p>Nhận bài viết mới qua email</p>
                <input type="email" placeholder="Email của bạn" className="newsletter-input" />
                <button className="newsletter-btn">Đăng ký</button>
            </div>
        </aside>
    );
}

// Main Blog App
function BlogApp() {
    const [posts] = useState([
        {
            id: 1,
            title: "Bắt đầu với CI/CD: Tự động hoá quy trình phát triển",
            excerpt: "Tìm hiểu các khái niệm cơ bản về Continuous Integration và Continuous Deployment. Cách thiết lập quy trình tự động hoá đầu tiên của bạn...",
            category: "CI/CD 101",
            date: "15 Tháng 8, 2026",
            readingTime: 5,
            tags: ["cicd", "automation", "devops"]
        },
        {
            id: 2,
            title: "GitHub Actions: Hướng dẫn chi tiết từ A đến Z",
            excerpt: "Khám phá cách sử dụng GitHub Actions để xây dựng, kiểm tra và triển khai ứng dụng của bạn tự động. Các ví dụ thực tế và best practices...",
            category: "Tools",
            date: "10 Tháng 8, 2026",
            readingTime: 8,
            tags: ["github-actions", "workflows", "automation"]
        },
        {
            id: 3,
            title: "Docker trong CI/CD Pipeline",
            excerpt: "Hiểu rõ cách Docker giúp chuẩn hoá quy trình triển khai. Container, image, và registry trong context của CI/CD...",
            category: "Docker",
            date: "05 Tháng 8, 2026",
            readingTime: 10,
            tags: ["docker", "containers", "deployment"]
        },
        {
            id: 4,
            title: "Monitoring & Logging cho CI/CD Pipelines",
            excerpt: "Làm thế nào để giám sát và ghi log các pipeline của bạn. Phát hiện vấn đề sớm và đảm bảo độ tin cậy...",
            category: "Monitoring",
            date: "01 Tháng 8, 2026",
            readingTime: 7,
            tags: ["monitoring", "logging", "observability"]
        }
    ]);

    return (
        <div className="blog-container">
            {/* Header */}
            <header className="blog-header">
                <div className="header-content">
                    <div className="logo-section">
                        <h1 className="blog-title">⚙️ CI/CD Blog</h1>
                        <p className="blog-subtitle">Tự động hoá • DevOps • Deployment</p>
                    </div>
                    <nav className="header-nav">
                        <a href="#" className="nav-link">Trang chủ</a>
                        <a href="#" className="nav-link">Bài viết</a>
                        <a href="#" className="nav-link">Về tôi</a>
                        <a href="#" className="nav-link">Liên hệ</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="blog-main">
                <div className="blog-content">
                    {/* Hero Section */}
                    <section className="hero-section">
                        <h2>Chào mừng đến CI/CD Blog</h2>
                        <p>Chia sẻ kinh nghiệm và bài học trong hành trình DevOps & Automation</p>
                    </section>

                    {/* Blog Posts */}
                    <section className="posts-section">
                        {posts.map(post => (
                            <BlogPost key={post.id} post={post} />
                        ))}
                    </section>
                </div>

                {/* Sidebar */}
                <Sidebar />
            </main>

            {/* Footer */}
            <footer className="blog-footer">
                <p>&copy; 2026 CI/CD Blog. Tất cả quyền được bảo lưu. | Made with React ⚛️</p>
                <div className="social-links">
                    <a href="#">GitHub</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(<BlogApp />);
