import { useRouter } from 'next/router';
import Head from 'next/head';

const posts = [
    {
      title: '10-Minute Morning Workout to Kickstart Your Day',
      slug: '10-minute-morning-workout',
      excerpt: 'Start your mornings with this quick and effective routine to boost energy and mood.',
      image: 'https://images.unsplash.com/photo-1731567387463-5d2457b04697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Morning Workouts are Beneficial</h2>
          <p>
            Morning workouts have become a popular choice for fitness enthusiasts worldwide, and for good reason. 
            Starting your day with physical activity not only boosts your energy levels but also sets a positive tone for the hours ahead. 
            Whether you're a seasoned athlete or a fitness newbie, incorporating morning exercise into your routine can transform your lifestyle, improve your health, and enhance your overall well-being.
            </p>
            <p>
            In this article, we’ll explore the many benefits of morning workouts, why they’re so effective, and how you can make them a sustainable part of your day.
            </p>

            <h2>The Science Behind Morning Workouts</h2>
            <p>
            The body’s natural circadian rhythm plays a significant role in how you feel at different times of the day. 
            Exercising in the morning takes advantage of your body’s elevated cortisol levels, which are naturally higher during early hours. 
            Cortisol, also known as the “stress hormone,” provides the energy needed to fuel your workouts.
            </p>
            <p>
            Additionally, exercising in the morning helps jumpstart your metabolism, allowing your body to burn calories more efficiently throughout the day. 
            This process, known as excess post-exercise oxygen consumption (EPOC), keeps your body in fat-burning mode long after you’ve finished your workout.
            </p>

            <h3>Boosts Energy and Mental Clarity</h3>
            <p>
            One of the most immediate benefits of morning workouts is the energy boost they provide. 
            Physical activity increases blood circulation and oxygen delivery to your muscles and brain, leaving you feeling more alert and focused.
            </p>
            <p>
            Many individuals report enhanced mental clarity and improved productivity after a morning workout. 
            This is largely due to the release of endorphins, which act as natural mood elevators. 
            Starting your day on a positive note can set the tone for better decision-making and increased efficiency at work or school.
            </p>

            <h3>Establishes a Healthy Routine</h3>
            <p>
            Morning workouts create a sense of discipline and consistency in your daily schedule. 
            By prioritizing fitness early in the day, you’re less likely to skip your workout due to unforeseen commitments or fatigue later on.
            </p>
            <p>
            This consistency also helps regulate your sleep patterns. Regular exercise, particularly in the morning, supports better quality sleep at night. 
            When you wake up feeling refreshed, it becomes easier to maintain a healthy cycle of activity and rest.
            </p>

            <h3>Reduces Stress and Anxiety</h3>
            <p>
            Physical activity is a proven stress reliever, and morning workouts are no exception. 
            Exercising releases endorphins, which reduce stress hormones like adrenaline and cortisol. 
            This makes morning workouts an excellent way to start your day on a calm, centered note.
            </p>
            <p>
            Additionally, incorporating mindfulness into your routine—such as yoga or a peaceful run—can help clear your mind and prepare you for the challenges of the day. 
            This emotional reset can be particularly beneficial if you tend to feel overwhelmed or anxious.
            </p>

            <h2>Improves Metabolism and Fat Loss</h2>
            <p>
            Exercising in the morning can enhance your body’s fat-burning potential. 
            When you work out on an empty stomach, often referred to as fasted cardio, your body uses stored fat as its primary source of energy. 
            This can lead to more effective fat loss over time.
            </p>
            <p>
            Beyond the immediate calorie burn, morning workouts contribute to an elevated metabolic rate throughout the day. 
            This means your body continues to burn calories even after your session has ended, thanks to the afterburn effect of EPOC.
            </p>

            <h2>Enhances Consistency and Commitment</h2>
            <p>
            For many people, finding time to exercise can be challenging. By scheduling your workouts in the morning, you eliminate distractions and ensure that fitness becomes a non-negotiable part of your routine.
            </p>
            <p>
            Morning workouts also reduce the likelihood of procrastination. 
            Once you’ve completed your exercise for the day, you’ll feel accomplished and motivated to tackle other tasks without the lingering guilt of skipping a workout.
            </p>

            <h2>Social and Community Benefits</h2>
            <p>
            Morning workouts often involve joining fitness groups, attending yoga classes, or participating in boot camps. 
            These social interactions can foster a sense of community and accountability, making it easier to stick to your fitness goals.
            </p>
            <p>
            Working out with others in the morning can also be an enjoyable way to start the day. 
            Shared goals and camaraderie provide additional motivation, and the energy of the group can be contagious.
            </p>

            <h2>How to Get Started with Morning Workouts</h2>
            <p>
            Transitioning to a morning workout routine can be challenging at first, especially if you’re not naturally a morning person. 
            However, with a few simple strategies, you can set yourself up for success:
            </p>
            <ul>
            <li>Prepare the night before by laying out your workout clothes and planning your session.</li>
            <li>Set a consistent wake-up time to help regulate your body clock.</li>
            <li>Start small with a 10-minute routine and gradually increase the duration and intensity.</li>
            <li>Reward yourself with a healthy breakfast or post-workout treat to stay motivated.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
            Morning workouts are a powerful way to improve your physical health, mental clarity, and overall productivity. 
            They offer a wide range of benefits, from boosting your metabolism to reducing stress and establishing a consistent routine.
            </p>
            <p>
            Whether you’re aiming to lose weight, build muscle, or simply feel better throughout the day, making time for morning exercise can be life-changing. 
            Start small, stay consistent, and enjoy the many rewards that come with prioritizing your health first thing in the morning.
            </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: 'Top 5 Superfoods for Muscle Recovery',
      slug: 'top-5-superfoods-for-muscle-recovery',
      excerpt: 'Discover the superfoods that aid in muscle recovery and help you perform better.',
      image: 'https://images.unsplash.com/photo-1731535025708-62177247ffe2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Muscle Recovery Matters</h2>
          <p>
            Muscle recovery is an essential aspect of any fitness journey. Whether you're lifting weights, running marathons, or engaging in yoga, your muscles undergo stress during exercise. 
            This stress leads to tiny tears in the muscle fibers, which are repaired during the recovery phase, resulting in stronger and more resilient muscles.
            </p>
            <p>
            While rest and hydration are crucial, nutrition plays a central role in optimizing recovery. Certain foods, known as superfoods, are packed with nutrients that help reduce inflammation, repair muscle tissue, and enhance overall performance. 
            In this article, we’ll explore the best superfoods to include in your diet to accelerate recovery and take your fitness to the next level.
            </p>

            <h2>Why Nutrition Matters for Recovery</h2>
            <p>
            After an intense workout, your body enters a state where it needs to repair, replenish, and rebuild. This is where nutrition comes into play. 
            The right foods provide your body with the proteins, carbohydrates, vitamins, and minerals it needs to recover effectively.
            </p>
            <p>
            Without proper nutrition, recovery slows down, leading to prolonged muscle soreness, fatigue, and even increased risk of injury. 
            Incorporating nutrient-dense superfoods into your meals ensures your body gets what it needs to bounce back stronger after every session.
            </p>

            <h3>What Are Superfoods?</h3>
            <p>
            Superfoods are nutrient-rich foods that provide a high concentration of vitamins, minerals, antioxidants, and other compounds beneficial for overall health. 
            These foods are especially effective in reducing inflammation, repairing tissue damage, and replenishing energy stores.
            </p>
            <p>
            Adding superfoods to your diet can give you a competitive edge by improving recovery times and enhancing performance, making them a must-have for athletes and fitness enthusiasts.
            </p>

            <h2>Top 5 Superfoods for Muscle Recovery</h2>
            <h3>1. Blueberries</h3>
            <p>
            Blueberries are packed with antioxidants, particularly anthocyanins, which help combat oxidative stress caused by intense exercise. 
            These antioxidants reduce muscle inflammation and promote faster recovery.
            </p>
            <p>
            Studies have shown that consuming blueberries before and after a workout can decrease muscle soreness and speed up the repair process. 
            They’re easy to incorporate into your diet—add them to smoothies, oatmeal, or simply eat them as a snack.
            </p>

            <h3>2. Salmon</h3>
            <p>
            Salmon is an excellent source of omega-3 fatty acids, which have powerful anti-inflammatory properties. 
            These fatty acids help reduce muscle soreness, improve joint health, and support the recovery of damaged tissues.
            </p>
            <p>
            Additionally, salmon is high in protein, which is essential for muscle repair. Enjoy it grilled, baked, or in a salad for a delicious recovery meal.
            </p>

            <h3>3. Spinach</h3>
            <p>
            Spinach is a leafy green powerhouse that’s rich in magnesium, a mineral crucial for muscle function and recovery. 
            Magnesium helps regulate muscle contractions and reduces cramping, making it an ideal food for post-workout recovery.
            </p>
            <p>
            Spinach also contains antioxidants and nitrates, which improve blood flow and deliver nutrients to the muscles. 
            Add spinach to your smoothies, salads, or stir-fries for a nutrient-packed boost.
            </p>

            <h3>4. Sweet Potatoes</h3>
            <p>
            Sweet potatoes are an excellent source of complex carbohydrates, which replenish glycogen stores depleted during exercise. 
            Glycogen is the primary fuel your muscles use during workouts, and restoring these levels is vital for recovery and energy.
            </p>
            <p>
            Sweet potatoes are also rich in potassium, an electrolyte that helps maintain fluid balance and prevent muscle cramps. 
            Roast them, mash them, or include them in a hearty post-workout bowl for a tasty recovery meal.
            </p>

            <h3>5. Greek Yogurt</h3>
            <p>
            Greek yogurt is a high-protein superfood that supports muscle repair and growth. 
            It also contains probiotics, which promote gut health and improve nutrient absorption, making it easier for your body to recover efficiently.
            </p>
            <p>
            Pair Greek yogurt with berries, honey, and granola for a satisfying post-workout snack that combines protein, carbohydrates, and antioxidants.
            </p>

            <h2>Additional Superfoods to Consider</h2>
            <h3>Chia Seeds</h3>
            <p>
            Chia seeds are packed with omega-3 fatty acids, fiber, and protein, making them a versatile addition to any meal. 
            They help reduce inflammation, improve hydration, and provide sustained energy.
            </p>
            <p>
            Mix chia seeds into smoothies, yogurt, or oatmeal for an easy recovery boost.
            </p>

            <h3>Bananas</h3>
            <p>
            Bananas are a great source of natural sugars and potassium, both of which are essential for replenishing energy and preventing muscle cramps. 
            They’re also easy to digest, making them a quick and convenient snack after a workout.
            </p>
            <p>
            Pair a banana with peanut butter for a delicious and nutrient-packed recovery snack.
            </p>

            <h2>How to Incorporate Superfoods into Your Diet</h2>
            <p>
            Incorporating superfoods into your diet doesn’t have to be complicated. Start by planning your meals around these nutrient-rich options. 
            For example, a post-workout meal could include grilled salmon with roasted sweet potatoes and a side of spinach. Alternatively, a Greek yogurt parfait with blueberries and chia seeds makes for a perfect recovery snack.
            </p>
            <p>
            Meal prepping is another effective way to ensure you always have recovery-friendly foods on hand. 
            Cook large batches of salmon, sweet potatoes, and spinach at the beginning of the week to save time and stay consistent.
            </p>

            <h2>The Importance of Hydration</h2>
            <p>
            While superfoods play a significant role in muscle recovery, hydration should not be overlooked. 
            Drinking enough water ensures that your body can transport nutrients to your muscles and flush out toxins that accumulate during exercise.
            </p>
            <p>
            For added electrolytes, consider incorporating coconut water or adding a pinch of sea salt to your water. Proper hydration combined with superfoods will maximize your recovery efforts.
            </p>

            <h2>Conclusion</h2>
            <p>
            Muscle recovery is a vital part of any fitness routine, and nutrition plays a central role in the process. 
            Incorporating superfoods like blueberries, salmon, spinach, sweet potatoes, and Greek yogurt into your diet can significantly enhance recovery times, reduce soreness, and improve overall performance.
            </p>
            <p>
            Remember, consistency is key. By making these foods a regular part of your meals, you’ll not only recover faster but also set yourself up for long-term success in your fitness journey. 
            Start adding these superfoods to your diet today and feel the difference they make in your performance and recovery.
            </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: '5 Common Gym Mistakes and How to Avoid Them',
      slug: 'common-gym-mistakes',
      excerpt: 'Learn about the most frequent gym errors and tips to stay on track.',
      image: 'https://images.unsplash.com/photo-1731308003135-713d58bd1947?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Introduction to Gym Mistakes</h2>
          <p>
            The gym is a fantastic place to improve your physical health, build strength, and work towards your fitness goals. 
            However, even the most dedicated gym-goers can fall into common pitfalls that hinder progress or lead to injury. 
            Whether you're new to fitness or a seasoned enthusiast, identifying and avoiding these mistakes can make a significant difference in your results.
            </p>
            <p>
            In this article, we’ll explore five of the most common gym mistakes and provide actionable advice to help you avoid them. 
            By addressing these issues, you can maximize your time at the gym and achieve your fitness goals more effectively.
            </p>

            <h2>Mistake 1: Skipping the Warm-Up</h2>
            <p>
            One of the most common mistakes people make in the gym is skipping the warm-up. 
            It might be tempting to jump straight into your workout, especially when you're pressed for time, but this can increase your risk of injury and reduce your performance.
            </p>
            <p>
            A proper warm-up prepares your body for exercise by increasing your heart rate, improving blood flow to your muscles, and enhancing your range of motion. 
            Dynamic stretches, light cardio, or mobility exercises are excellent ways to warm up effectively.
            </p>
            <h3>How to Avoid This Mistake</h3>
            <p>
            Dedicate 5–10 minutes to a warm-up before every workout. Start with light cardio, such as jogging or cycling, followed by dynamic stretches tailored to the muscles you’ll be working. 
            For example, if you're training legs, incorporate lunges and leg swings to activate those muscle groups.
            </p>

            <h2>Mistake 2: Using Incorrect Form</h2>
            <p>
            Incorrect form is a prevalent issue that can lead to ineffective workouts and serious injuries. 
            Many gym-goers prioritize lifting heavier weights over maintaining proper technique, which compromises their safety and limits their progress.
            </p>
            <p>
            Using proper form ensures that you target the intended muscles and reduce strain on your joints. It’s better to lift lighter weights with good form than heavier weights with poor technique.
            </p>
            <h3>How to Avoid This Mistake</h3>
            <p>
            Focus on mastering the form of each exercise before increasing the weight. If you're unsure about your technique, consider working with a trainer or watching instructional videos. 
            Start with bodyweight exercises to build a strong foundation and gradually progress to weighted movements.
            </p>

            <h2>Mistake 3: Overtraining</h2>
            <p>
            Overtraining occurs when you push your body beyond its ability to recover, leading to fatigue, decreased performance, and an increased risk of injury. 
            While dedication is admirable, failing to give your body adequate rest can do more harm than good.
            </p>
            <p>
            Rest days are an essential part of any fitness program. They allow your muscles to repair and grow stronger while preventing burnout and overuse injuries.
            </p>
            <h3>How to Avoid This Mistake</h3>
            <p>
            Schedule at least one or two rest days per week, depending on the intensity of your workouts. Listen to your body—if you feel unusually fatigued or sore, take an extra day off. 
            Incorporating active recovery activities, such as yoga or light walking, can help you stay active without overexerting yourself.
            </p>

            <h2>Mistake 4: Not Tracking Progress</h2>
            <p>
            Many people go to the gym without a clear plan or system for tracking their progress. 
            Without tracking, it’s challenging to measure improvements or identify areas that need more attention. 
            This lack of direction can lead to plateaus and reduced motivation over time.
            </p>
            <p>
            Tracking your progress allows you to set realistic goals, monitor your achievements, and adjust your workouts to ensure continuous improvement.
            </p>
            <h3>How to Avoid This Mistake</h3>
            <p>
            Keep a workout journal or use a fitness app to record your exercises, sets, reps, and weights. 
            Review your progress regularly to identify patterns and celebrate milestones. 
            Setting short-term and long-term goals can also help keep you motivated and focused.
            </p>

            <h2>Mistake 5: Neglecting Nutrition</h2>
            <p>
            Exercise is only part of the equation when it comes to achieving fitness goals. 
            Neglecting nutrition can significantly impact your performance, recovery, and overall results. 
            Many gym-goers either consume too few calories or make poor food choices, which hinders their progress.
            </p>
            <p>
            Proper nutrition fuels your workouts, supports muscle growth, and aids in recovery. 
            A balanced diet that includes protein, carbohydrates, healthy fats, and plenty of vitamins and minerals is essential for optimizing your gym efforts.
            </p>
            <h3>How to Avoid This Mistake</h3>
            <p>
            Plan your meals to ensure you’re meeting your nutritional needs. Include a source of lean protein, such as chicken or tofu, with every meal to support muscle repair. 
            Pair it with complex carbohydrates like quinoa or sweet potatoes to replenish glycogen stores. 
            Don’t forget to hydrate—water is critical for maintaining energy levels and preventing dehydration.
            </p>

            <h2>Additional Tips for Success</h2>
            <p>
            Avoiding these common mistakes is a great start, but there are other strategies you can implement to maximize your gym sessions:
            </p>
            <ul>
            <li>Set realistic goals and adjust them as you progress.</li>
            <li>Prioritize consistency over intensity to build a sustainable routine.</li>
            <li>Incorporate variety into your workouts to prevent boredom and challenge different muscle groups.</li>
            <li>Pay attention to your body’s signals and avoid pushing through pain.</li>
            <li>Seek guidance from experienced trainers or fitness professionals when needed.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
            The gym is a place to grow stronger, both physically and mentally, but avoiding common mistakes is crucial to making the most of your efforts. 
            Skipping warm-ups, using poor form, overtraining, neglecting progress tracking, and ignoring nutrition are all pitfalls that can derail your progress and even lead to injury.
            </p>
            <p>
            By addressing these issues and implementing the tips provided in this article, you’ll be well on your way to achieving your fitness goals safely and effectively. 
            Remember, consistency and attention to detail are the keys to success. Show up, stay committed, and enjoy the journey to a healthier, stronger you.
            </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: 'Best Cardio Workouts for Fat Loss',
      slug: 'best-cardio-workouts',
      excerpt: 'These cardio exercises are perfect for burning fat and improving heart health.',
      image: 'https://images.unsplash.com/photo-1731347910715-f8ccc7c2d104?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Cardio is Key</h2>
          <p>
            Cardio, short for cardiovascular exercise, is one of the most essential components of a well-rounded fitness routine. 
            It encompasses activities that get your heart rate up, improve your breathing, and engage your entire body. 
            Whether you prefer running, swimming, cycling, or dancing, cardio plays a significant role in maintaining your health and achieving your fitness goals.
            </p>
            <p>
            In this article, we’ll delve into why cardio is crucial for your physical and mental well-being, explore its numerous benefits, and discuss how you can incorporate it into your lifestyle effectively.
            </p>

            <h2>What is Cardiovascular Exercise?</h2>
            <p>
            Cardiovascular exercise refers to any activity that increases your heart rate and keeps it elevated for an extended period. 
            These exercises engage large muscle groups and require your heart and lungs to work harder to deliver oxygen throughout your body.
            </p>
            <p>
            Popular forms of cardio include running, brisk walking, cycling, swimming, and even high-intensity interval training (HIIT). 
            The intensity and duration of your cardio sessions can vary based on your fitness level and goals, making it an adaptable form of exercise for everyone.
            </p>

            <h2>The Physical Benefits of Cardio</h2>
            <h3>Improves Heart Health</h3>
            <p>
            One of the most significant benefits of cardio is its ability to strengthen your heart. 
            Your heart is a muscle, and like any other muscle in your body, it becomes stronger with regular exercise. 
            Engaging in cardio reduces your risk of heart disease, lowers blood pressure, and improves circulation.
            </p>
            <p>
            Over time, regular cardiovascular activity increases your heart’s efficiency, allowing it to pump blood more effectively. 
            This not only supports your workouts but also enhances your overall health.
            </p>

            <h3>Boosts Endurance</h3>
            <p>
            Cardio is key to building endurance and stamina. 
            As you perform regular cardio workouts, your body adapts by increasing lung capacity and improving the efficiency of your cardiovascular system. 
            This means you’ll be able to sustain physical activity for longer periods without feeling fatigued.
            </p>
            <p>
            Improved endurance isn’t just beneficial for athletes—it’s also helpful for everyday activities, such as climbing stairs, walking long distances, or carrying groceries.
            </p>

            <h3>Aids in Weight Management</h3>
            <p>
            Cardiovascular exercise is an effective way to burn calories and manage weight. 
            Activities like running, cycling, and swimming can burn a significant number of calories, depending on the intensity and duration of your workout.
            </p>
            <p>
            When combined with a balanced diet, regular cardio can create a calorie deficit, which is essential for weight loss. 
            Even short bursts of cardio, such as a 20-minute HIIT session, can provide substantial results by boosting your metabolism and keeping it elevated long after your workout ends.
            </p>

            <h2>The Mental Benefits of Cardio</h2>
            <h3>Reduces Stress</h3>
            <p>
            Cardio is a powerful stress reliever. 
            During exercise, your brain releases endorphins, which are chemicals that act as natural mood elevators. 
            These endorphins help reduce stress, anxiety, and even symptoms of depression.
            </p>
            <p>
            Whether it’s a brisk walk outdoors or an intense spin class, cardio allows you to disconnect from daily pressures and focus on your physical activity, leaving you feeling refreshed and rejuvenated.
            </p>

            <h3>Enhances Cognitive Function</h3>
            <p>
            Cardiovascular exercise has been linked to improved brain health and cognitive function. 
            By increasing blood flow to the brain, cardio stimulates the growth of new neurons and enhances neural connections. 
            This can lead to better memory, focus, and overall mental clarity.
            </p>
            <p>
            Regular cardio has also been shown to reduce the risk of age-related cognitive decline, making it a valuable tool for maintaining mental sharpness as you grow older.
            </p>

            <h2>Cardio and Longevity</h2>
            <p>
            Numerous studies have highlighted the connection between cardiovascular exercise and increased lifespan. 
            People who engage in regular cardio tend to have lower rates of chronic diseases, such as heart disease, diabetes, and certain cancers. 
            By improving your overall health and reducing the risk of illness, cardio contributes to a longer, healthier life.
            </p>
            <p>
            Additionally, the improved physical fitness and mental well-being that come with cardio help you maintain an active and independent lifestyle well into your later years.
            </p>

            <h2>Types of Cardio Workouts</h2>
            <h3>Low-Intensity Steady State (LISS)</h3>
            <p>
            LISS cardio involves exercising at a consistent, low-to-moderate intensity for an extended period, such as walking, cycling, or swimming. 
            This type of cardio is ideal for beginners or those recovering from an injury, as it is gentle on the joints and easy to sustain.
            </p>

            <h3>High-Intensity Interval Training (HIIT)</h3>
            <p>
            HIIT alternates between short bursts of intense activity and periods of rest or low-intensity exercise. 
            For example, you might sprint for 30 seconds and then walk for one minute, repeating the cycle for 20 minutes.
            </p>
            <p>
            HIIT is highly effective for burning calories, improving endurance, and boosting metabolism. 
            It’s a great option for those with limited time who want maximum results in a short workout.
            </p>

            <h3>Mixed Cardio</h3>
            <p>
            Mixed cardio combines different forms of cardiovascular exercise to keep your routine varied and engaging. 
            For instance, you might alternate between running, cycling, and swimming throughout the week. 
            This approach prevents boredom and ensures that you’re challenging different muscle groups.
            </p>

            <h2>How to Incorporate Cardio Into Your Routine</h2>
            <p>
            Adding cardio to your fitness plan doesn’t have to be complicated. 
            Start by selecting activities you enjoy, as this will make it easier to stick to your routine. 
            Aim for at least 150 minutes of moderate-intensity cardio or 75 minutes of vigorous cardio per week, as recommended by health guidelines.
            </p>
            <p>
            Schedule your cardio sessions at a time that works best for you, whether it’s a morning jog, a lunchtime walk, or an evening spin class. 
            Gradually increase the intensity and duration of your workouts as your fitness improves.
            </p>

            <h2>Conclusion</h2>
            <p>
            Cardio is a cornerstone of a healthy lifestyle, offering benefits that extend far beyond physical fitness. 
            From improving heart health and endurance to reducing stress and enhancing cognitive function, cardiovascular exercise is key to achieving overall well-being.
            </p>
            <p>
            No matter your fitness level or goals, there’s a cardio workout that’s right for you. 
            Start incorporating cardio into your routine today and experience the profound impact it can have on your body and mind.
            </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: 'Stretching Techniques for Better Flexibility',
      slug: 'stretching-techniques',
      excerpt: 'Improve your range of motion with these essential stretching techniques.',
      image: 'https://images.unsplash.com/photo-1728963606465-590b0c43dc5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Stretching is Essential</h2>
          <p>
            Stretching improves flexibility, reduces stiffness, and prevents injury. It also promotes better posture and aids in muscle recovery.
          </p>
        </section>
        <section>
          <h2 class="mb-4">Essential Stretching Techniques</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item"><strong>Hamstring Stretch:</strong> Great for relieving tightness in your legs.</li>
            <li class="list-group-item"><strong>Child’s Pose:</strong> Opens your back and stretches the spine.</li>
            <li class="list-group-item"><strong>Cat-Cow Stretch:</strong> Improves spinal flexibility and posture.</li>
            <li class="list-group-item"><strong>Quadriceps Stretch:</strong> Reduces stiffness in the front of your thighs.</li>
          </ul>
        </section>
      `,
    },
    {
      title: 'Benefits of Strength Training for Women',
      slug: 'strength-training-for-women',
      excerpt: 'Strength training isn’t just for men. Learn its amazing benefits for women.',
      image: 'https://images.unsplash.com/photo-1731432249483-2418feb8065e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Strength Training Myths Debunked</h2>
          <p>
            Many women shy away from strength training due to myths about "bulking up." However, strength training builds lean muscle, increases metabolism, and boosts confidence.
          </p>
        </section>
        <section>
          <h2 class="mb-4">Top Benefits of Strength Training</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item"><strong>Stronger Bones:</strong> Strength training increases bone density and reduces osteoporosis risk.</li>
            <li class="list-group-item"><strong>Improved Metabolism:</strong> Muscle burns more calories at rest than fat.</li>
            <li class="list-group-item"><strong>Better Balance:</strong> Strength training improves stability and coordination.</li>
            <li class="list-group-item"><strong>Increased Strength:</strong> Everyday tasks become easier with stronger muscles.</li>
          </ul>
        </section>
      `,
    },
  ];
  
  

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

export default function PostPage({ post }) {
  const router = useRouter();

  if (!post) return <div>Loading...</div>;

  return (
    <div>
       
      <Head>
        <title>{post.title}</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            CodedTag
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     {/* Ad Box 1 */}
     <div className="container my-5">
            <div className="bg-danger text-white d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
            <p className="mb-0">Ad Box 1 (Responsive)</p>
            </div>
        </div>
      {/* Banner */}
      <div className="container-fluid bg-light py-5">
        <div className="container text-center">
          <img src={post.image} alt={post.title} className="img-fluid rounded mb-4" />
          <h1>{post.title}</h1>
          <p className="text-muted">{post.excerpt}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="container my-5">
        <div className="row">
        <div className="col-9">
            {/* Ad Box 1 */}
            <div className="container my-5">
                <div className="bg-danger text-white d-flex align-items-center justify-content-center" style={{ height: 'auto' }}>
                <p className="mb-0">Ad Box 1 (Responsive)</p>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <div className="col-3">
            {/* Ad Box 1 */}
            <div className="container my-5">
                <div className="bg-danger text-white d-flex align-items-center justify-content-center" style={{ height: 'auto' }}>
                Muscle recovery is an essential aspect of any fitness journey. Whether you're lifting weights, running marathons, or engaging in yoga, your muscles undergo stress during exercise. This stress leads to tiny tears in the muscle fibers, which are repaired during the recovery phase, resulting in stronger and more resilient muscles.

                While rest and hydration are crucial, nutrition plays a central role in optimizing recovery. Certain foods, known as superfoods, are packed with nutrients that help reduce inflammation, repair muscle tissue, and enhance overall performance. In this article, we’ll explore the best superfoods to include in your diet to accelerate recovery and take your fitness to the next level.


                </div>
            </div>
        </div>
        </div>
      </div>
        {/* Ad Box 1 */}
        <div className="container my-5">
                <div className="bg-danger text-white d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
                <p className="mb-0">Ad Box 1 (Responsive)</p>
                </div>
            </div>
      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container text-center">
          <a href="#" className="me-3 text-decoration-none text-dark">
            Contact Us
          </a>
          <a href="#" className="me-3 text-decoration-none text-dark">
            Privacy Policy
          </a>
          <a href="#" className="me-3 text-decoration-none text-dark">
            Terms & Conditions
          </a>
          <a href="#" className="text-decoration-none text-dark">
            About
          </a>
          <div className="mt-3">
            <p className="small">&copy; 2024 CodedTag. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
