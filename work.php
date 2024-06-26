<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Website</title>
    <link rel="stylesheet" href="work.css">
</head>
<body>
</head>
<body>
</head>
<body>
  <header class="header">
    <nav>
      <div class="logo-container">
        <img src="https://img.freepik.com/premium-vector/fitness-center-logo_25327-234.jpg?w=740" alt="Website Logo" class="logo">
    </div>
    <div class="text">
         <p>Fitness pro</p></div>
         <div class="banner-container">
          <img src="https://templates.mediamodifier.com/5e4822cc8072777b01f5e188/Fitness-And-Gym-Youtube-Banner-Template.jpg" alt="Website Banner" class="banner">
      </div>
      <ul>
        <a href="home.php" class="header-btn">Home</a>
        <a href="work.php" class="header-btn">Workouts</a>
        <a href="medi.php" class="header-btn">Meditation</a>
        <a href="sign.php" class="header-btn">Sign-Up</a>
        <a href="login.php" class="header-btn">Login</a>
      </ul>
    </nav>
    </div>
  </header>
    <body>
      <section>
        <section class="workout-container" id="workouts">
          <!-- Workout 1 -->
          <div class="workout-item">
            <img src="https://th.bing.com/th/id/OIP.IY9dxl29nKd3XvYaoFAGuQAAAA?rs=1&pid=ImgDetMain" alt="Push-Ups">
            <h3>1.Push-Ups</h3>
            <div>
              <a href="pushups.php" class="FOOTER-btn">pushups</a>
            </div>
            <section class="workout-info">
            </section>
          </div>
          <!-- Workout 2 -->
          <div class="workout-item">
            <img src="https://cbphysicaltherapy.com/wp-content/uploads/2015/03/Perfect-Squat-1280x1409.jpg" alt="Squats">
            <h3>2.Squats</h3>
            <div>
              <a href="squats.php" class="FOOTER-btn">squats</a>
            </div>
            <section class="workout-info">
            </section>
          </div>
          <!-- Workout 3 -->
          <div class="workout-item">
            <img src="https://th.bing.com/th/id/R.83d616be47245e04b863033d0eb9cd10?rik=a0iPURGcitJHsw&riu=http%3a%2f%2fmojo.dailybruin.com%2fwp-content%2fuploads%2f2014%2f04%2fplank-20.jpg&ehk=tF66JYcuvlwEwN2tvvbaSDKZbgqT8iPwi7HNbT6a15M%3d&risl=1&pid=ImgRaw&r=0" alt="Plank">
            <h3>3.Plank</h3>
            <section class="workout-info">
            </section>
            <a href="plank.php" class="FOOTER-btn">Plank</a>
          </div>
          <!-- Workout 4 -->
          <div class="workout-item">
            <img src="https://th.bing.com/th/id/OIP.HJgSo2QuWpLnv1lnDZ0R7QHaGz?rs=1&pid=ImgDetMain" alt="Lunges">
            <h3>4.Lunges</h3>
            <section class="workout-info">
            </section>
            <a href="lunges.php" class="FOOTER-btn">Lunges</a>
          </div>
          <!-- Workout 5 -->
          <div class="workout-item">
            <img src="https://th.bing.com/th/id/OIP.j24DQp3s9lv7mt4Qlq7l6gHaD3?rs=1&pid=ImgDetMain" alt="Glute Bridges">
            <h3>5.Glute Bridges</h3>
            <section class="workout-info">
              <a href="gultbridges.php" class="FOOTER-btn">gultbridges</a>
            </section>
          </div>
          <!-- Workout 6 -->
          <div class="workout-item">
            <img src="https://inshape.blog/wp-content/uploads/2021/10/how-to-do-jumping-jacks-guide.jpg" alt="Jumping Jacks">
            <h3>6.Jumping Jacks</h3>
            <section class="workout-info">
              <a href="jumping.php" class="FOOTER-btn">jumping Jacks</a>
            </section>
          </div>
            <!-- Workout 7 -->
          <div class="workout-item">
            <img src="https://media1.popsugar-assets.com/files/thumbor/AJchafbgbaW-DtHbhavAT4DDOmc/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2018/01/04/199/n/41245764/687e54c3ccb4ce6c_Bicycle-Crunches/i/Bicycle-Crunches.jpg" alt="Bicycle-Crunches">
            <h3>7.Bicycle-Crunches</h3>
            <section class="workout-info">
              <a href="bycycle.php" class="FOOTER-btn">bycycle</a>
            </section>
          </div>
          <!-- Workout 8 -->
          <div class="workout-item">
           <img src="https://th.bing.com/th/id/OIP.uII8AmPzIvnM_ciGiGblOwAAAA?rs=1&pid=ImgDetMain" alt="Mountain Climbers">
           <h3>8.Mountain Climbers</h3>
           <section class="workout-info">
            <a href="mountain.php" class="FOOTER-btn">Mountain Climbers</a>
           </section>
          </div>
          <!-- Workout 9 -->
          <div class="workout-item">
           <img src="https://www.inmotionlife.com/wp-content/uploads/Leg-Raises.jpg" alt="Leg-Raises">
           <h3>9.Leg-Raises</h3>
           <section class="workout-info">
            <a href="leg.php" class="FOOTER-btn">leg-raises</a>
           </section>
          </div>
      </section>
    </body>
    <section>

    <div class="container">
        <h2>Workout Tracker</h2>
        <form action="tracker.php" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="exercise_name">Exercise Name:</label>
                <input type="text" id="exercise_name" name="exercise" required>
            </div>
            
            <div class="form-group">
                <label for="duration">Duration (minutes):</label>
                <input type="number" id="duration" name="duration" required>
            </div>
            
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>
            </div>
            <input type="submit" value="Save Workout">
    </section>
</main>
<footer>
  <div class="container">
    <footer>
     
      <div>
        <a href="chat.php" class="FOOTER-btn">FAQ'S</a>
      </div>
          <div>
              <h1>products</h1>
              <ul>
                <div class="footer-fitness-brands">
                  <ul class="footer-fitness-brands-list">
                      <li class="footer-fitness-brand-item"><a href="#">Nike</a></li>
                      <li class="footer-fitness-brand-item"><a href="#">Adidas</a></li>
                      <li class="footer-fitness-brand-item"><a href="#">Under Armour</a></li>
                      <li class="footer-fitness-brand-item"><a href="#">Reebok</a></li>
                      <li class="footer-fitness-brand-item"><a href="#">Puma</a></li>
                      <!-- Add more brands needed -->
                  </ul>
              </div>
              
              </ul>
          </div>
          <div>
              <h2>Company</h2>
              <ul class="footer-menu-list">
                <li><a href="#">FitBit</a></li>
                <li><a href="#">Nike Training Club</a></li>
                <li><a href="#">MyFitnessPal</a></li>
                <li><a href="#">Peloton</a></li>
                <li><a href="#">Under Armour</a></li>
            </ul>
          </div>
          <div>
              <h2>Legal</h2>
              <ul>
                  <li><a href="#">Privacy Notice</a></li>
                  <li><a href="#">Terms of Use</a></li>
              </ul>
          </div>
          <div>
              <h2>Quick Links</h2>
              <ul>
                  <li><a href="#">Support Center</a></li>
                  <li><a href="#">Service Status</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Customers</a></li>
                  <li><a href="#">Reviews</a></li>
              </ul>
          </div>
          <div>
              <h2>Let's Chat</h2>
              <p>Have a support question?</p>
              <a href="#">Get in Touch</a>
              <h2>You Call Us</h2>
              <p><a href="tel:0124-64XXXX">0124-64XXXX</a></p>
          </div>
          <div>
              <a href="#" target="_blank">Linkedin</a>
              <a href="#" target="_blank">Twitter</a>
              <a href="#" target="_blank">Youtube</a>
              <a href="#" target="_blank">Github</a>
          </div>
         
      </div>
  </footer>
</footer>

</body>
</html>
  </div>
</footer>