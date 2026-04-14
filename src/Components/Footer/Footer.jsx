import "./Footer.css";
export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        {/* <!-- Left Section --> */}
        <div class="footer-col">
          <h2 class="logo">📖 LearnHub</h2>
          <p class="footer-desc">
            Empowering millions of learners worldwide with industry-leading
            courses and expert mentors.
          </p>

          <div class="contact">
            <p>📧 hello@learnhub.com</p>
            <p>📞 +1 (234) 567-890</p>
            <p>📍 San Francisco, CA</p>
          </div>
        </div>

        {/* <!-- Product --> */}
        <div class="footer-col">
          <h3>Product</h3>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        {/* <!-- Company --> */}
        <div class="footer-col">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>

        {/* <!-- Support --> */}
        <div class="footer-col">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* <!-- Help Center --÷>÷ */}
        <div class="footer-col">
          <h3>Help Center</h3>
          <ul>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          © 2026 LearnHub. All rights reserved. Developed by
          <span>Codescandy</span> • Distributed by
          <span>ThemeWagon</span>
        </p>
      </div>
    </footer>
  );
}
