
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Location", href: "/#location" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Blog", href: "/blog" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mock blog posts data (in a real app, this would come from a database)
  const blogPosts = [
    {
      id: "1",
      title: "The Importance of Regular Dental Check-ups",
      slug: "importance-of-regular-dental-checkups",
      date: "July 10, 2023",
      readTime: "5 min read",
      category: "Preventive Care",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <h2>Why Regular Dental Check-ups Matter</h2>
        <p>Regular dental check-ups are crucial for maintaining good oral health. These routine visits allow your dentist to detect and address potential issues before they become more serious problems. By visiting your dentist every six months, you're taking a proactive approach to your dental care.</p>
        
        <h2>What Happens During a Dental Check-up?</h2>
        <p>A typical dental check-up consists of two parts: the examination and the cleaning. During the examination, your dentist will check for cavities, plaque, and tartar. They'll also examine your gums for signs of disease and check your tongue, throat, face, and neck for any abnormalities.</p>
        
        <p>The cleaning part of your visit involves removing plaque and tartar buildup, thoroughly cleaning your teeth, and possibly applying fluoride to help protect your teeth until your next visit.</p>
        
        <h2>The Benefits of Regular Dental Visits</h2>
        <h3>1. Early Detection of Dental Issues</h3>
        <p>One of the primary benefits of regular dental check-ups is the early detection of potential problems. Issues like cavities, gum disease, and even oral cancer are much easier to treat when caught early.</p>
        
        <h3>2. Prevention of Tooth Decay and Gum Disease</h3>
        <p>Professional cleanings remove plaque and tartar that can't be eliminated through regular brushing and flossing. This helps prevent tooth decay and gum disease, which can lead to tooth loss if left untreated.</p>
        
        <h3>3. Maintaining Good Oral Health</h3>
        <p>Your dentist can provide personalized advice on maintaining good oral hygiene based on your specific needs. They might recommend changes to your brushing technique or suggest products that could benefit your oral health.</p>
        
        <h3>4. Overall Health Benefits</h3>
        <p>Research has shown links between oral health and various systemic conditions, including heart disease and diabetes. By maintaining good oral health through regular dental visits, you may be contributing to your overall well-being.</p>
        
        <h2>How Often Should You Visit the Dentist?</h2>
        <p>For most people, dental check-ups every six months are recommended. However, your dentist might suggest more frequent visits if you have specific oral health concerns or are at higher risk for dental problems.</p>
        
        <h2>Conclusion</h2>
        <p>Regular dental check-ups are an essential part of preventive healthcare. By seeing your dentist regularly, you're investing in your long-term oral health and potentially saving yourself from more complex and costly treatments down the line.</p>
      `
    },
    {
      id: "2",
      title: "Tips for Maintaining Healthy Gums",
      slug: "tips-for-maintaining-healthy-gums",
      date: "August 5, 2023",
      readTime: "4 min read",
      category: "Oral Hygiene",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <h2>Understanding Gum Health</h2>
        <p>Healthy gums are essential for a healthy mouth. They provide support for your teeth, protect the roots of your teeth, and help maintain the integrity of your jawbone. When your gums are healthy, they are firm, pale pink, and fit snugly around your teeth.</p>
        
        <h2>Common Gum Problems</h2>
        <p>The most common gum problems are gingivitis and periodontitis. Gingivitis is a mild form of gum disease that causes irritation, redness, and swelling of your gums. If left untreated, gingivitis can progress to periodontitis, a more serious condition that can lead to tooth loss.</p>
        
        <h2>Effective Strategies for Healthy Gums</h2>
        
        <h3>1. Brush Properly Twice a Day</h3>
        <p>Proper brushing is crucial for maintaining healthy gums. Use a soft-bristled toothbrush and fluoride toothpaste. Brush at a 45-degree angle to your gums, using short, gentle strokes. Make sure to brush all surfaces of your teeth and along your gumline.</p>
        
        <h3>2. Floss Daily</h3>
        <p>Flossing removes food particles and plaque from between your teeth and under your gumline, where your toothbrush can't reach. Be gentle when flossing to avoid injuring your gums.</p>
        
        <h3>3. Use Mouthwash</h3>
        <p>An antimicrobial mouthwash can help reduce bacteria that cause gum disease. It can also reach areas that brushing and flossing might miss.</p>
        
        <h3>4. Eat a Balanced Diet</h3>
        <p>A diet rich in vitamins and minerals, especially vitamins C and D, can help support gum health. Limit sugary foods and drinks, which can contribute to plaque formation.</p>
        
        <h3>5. Quit Smoking</h3>
        <p>Smoking is strongly associated with the onset of gum disease. It can also lower your immune system's ability to fight off gum infection.</p>
        
        <h3>6. Regular Dental Check-ups</h3>
        <p>Professional cleanings are essential for removing plaque and tartar that can't be eliminated through regular brushing and flossing.</p>
        
        <h2>Warning Signs of Gum Disease</h2>
        <p>Be on the lookout for signs of gum disease, such as:</p>
        <ul>
          <li>Red, swollen, or tender gums</li>
          <li>Bleeding gums when brushing or flossing</li>
          <li>Receding gums</li>
          <li>Persistent bad breath</li>
          <li>Loose teeth</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Maintaining healthy gums is an essential part of your overall oral health. By following these tips and being vigilant about changes in your gums, you can help prevent gum disease and maintain a healthy smile for years to come.</p>
      `
    },
    {
      id: "3",
      title: "Understanding Dental Implants: A Comprehensive Guide",
      slug: "understanding-dental-implants",
      date: "September 12, 2023",
      readTime: "7 min read",
      category: "Restorative Dentistry",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      content: `
        <h2>What Are Dental Implants?</h2>
        <p>Dental implants are artificial tooth roots made of titanium that provide a permanent base for fixed replacement teeth. They are designed to blend with your natural teeth and are a popular alternative to dentures or bridges.</p>
        
        <h2>How Do Dental Implants Work?</h2>
        <p>Dental implants work by fusing with your jawbone, providing stable support for artificial teeth. Because they integrate into your bone structure, they prevent the bone loss that often occurs with missing teeth and provide a sturdy foundation for replacement teeth that look, feel, and function like natural teeth.</p>
        
        <h2>The Dental Implant Procedure</h2>
        <h3>Initial Consultation</h3>
        <p>The first step in the dental implant process is a comprehensive evaluation by your dentist. This will include dental x-rays and potentially 3D scans to assess your bone quality and quantity.</p>
        
        <h3>Implant Placement</h3>
        <p>During the surgical procedure, the titanium implant is placed into your jawbone. The area is then allowed to heal, and the implant fuses with your jawbone through a process called osseointegration. This typically takes several months.</p>
        
        <h3>Abutment Placement</h3>
        <p>Once osseointegration is complete, an abutment is attached to the implant. The abutment is a connector that holds the replacement tooth.</p>
        
        <h3>Crown Placement</h3>
        <p>Finally, a custom-made crown (replacement tooth) is attached to the abutment. The crown is designed to match your natural teeth in color and shape.</p>
        
        <h2>Benefits of Dental Implants</h2>
        <h3>1. Improved Appearance</h3>
        <p>Dental implants look and feel like your natural teeth. Because they are designed to fuse with bone, they become permanent.</p>
        
        <h3>2. Improved Speech</h3>
        <p>With poor-fitting dentures, the teeth can slip within the mouth, causing you to mumble or slur your words. Dental implants allow you to speak without the worry that your teeth might slip.</p>
        
        <h3>3. Improved Comfort</h3>
        <p>Because they become part of you, implants eliminate the discomfort of removable dentures.</p>
        
        <h3>4. Easier Eating</h3>
        <p>Sliding dentures can make chewing difficult. Dental implants function like your own teeth, allowing you to eat your favorite foods with confidence and without pain.</p>
        
        <h3>5. Improved Self-Esteem</h3>
        <p>Dental implants can give you back your smile and help you feel better about yourself.</p>
        
        <h3>6. Improved Oral Health</h3>
        <p>Dental implants don't require reducing other teeth, as a tooth-supported bridge does. Because nearby teeth are not altered to support the implant, more of your own teeth are left intact, improving long-term oral health.</p>
        
        <h3>7. Durability</h3>
        <p>Implants are very durable and will last many years. With good care, many implants last a lifetime.</p>
        
        <h2>Aftercare for Dental Implants</h2>
        <p>Taking care of your dental implants is similar to caring for your natural teeth:</p>
        <ul>
          <li>Brush twice a day with a soft-bristled toothbrush</li>
          <li>Floss daily</li>
          <li>Use an antimicrobial mouthwash</li>
          <li>Visit your dentist regularly for check-ups and cleanings</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Dental implants are a reliable and long-lasting solution for replacing missing teeth. While the process may take several months to complete, the results are worth it: a beautiful, functional smile that can last a lifetime with proper care.</p>
      `
    },
    {
      id: "4",
      title: "Children's Dental Health: Starting Good Habits Early",
      slug: "childrens-dental-health",
      date: "October 8, 2023",
      readTime: "6 min read",
      category: "Pediatric Dentistry",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <h2>The Importance of Early Dental Care</h2>
        <p>Establishing good dental habits in childhood sets the foundation for a lifetime of healthy teeth and gums. Children who learn to care for their teeth from an early age are more likely to continue these habits into adulthood, reducing their risk of dental problems and potentially costly treatments later in life.</p>
        
        <h2>When to Start Dental Care for Children</h2>
        <h3>Before Teeth Emerge</h3>
        <p>Dental care begins even before your baby's first tooth appears. You can gently clean your baby's gums with a soft, damp cloth after feedings to remove bacteria.</p>
        
        <h3>When Teeth Start to Emerge</h3>
        <p>Once teeth begin to appear, usually around 6 months of age, you can start brushing them with an infant toothbrush and a tiny amount of fluoride toothpaste (about the size of a grain of rice).</p>
        
        <h3>First Dental Visit</h3>
        <p>The American Academy of Pediatric Dentistry recommends that children see a dentist by their first birthday or within six months after their first tooth emerges.</p>
        
        <h2>Teaching Good Oral Hygiene Habits</h2>
        <h3>1. Make Brushing Fun</h3>
        <p>Turn brushing into a fun activity rather than a chore. You might play a favorite song that's about two minutes long (the recommended brushing time), use a toothbrush that lights up or has a favorite character, or create a reward system for consistent brushing.</p>
        
        <h3>2. Lead by Example</h3>
        <p>Children learn by watching their parents. Let your children see you brushing and flossing regularly, and make it a family activity.</p>
        
        <h3>3. Establish a Routine</h3>
        <p>Consistency is key. Establish a regular time for brushing in the morning and before bed, so it becomes a natural part of your child's daily routine.</p>
        
        <h3>4. Teach Proper Technique</h3>
        <p>Show your child how to brush all surfaces of their teeth gently, reaching the back teeth and along the gumline. As they get older, teach them how to floss or use a floss pick.</p>
        
        <h2>Diet and Dental Health</h2>
        <p>What your child eats has a significant impact on their dental health:</p>
        <ul>
          <li>Limit sugary snacks and drinks, which contribute to tooth decay</li>
          <li>Encourage water instead of juice or soda</li>
          <li>Provide calcium-rich foods for strong teeth, such as dairy products, leafy greens, and almonds</li>
          <li>Offer crunchy fruits and vegetables, which can help clean teeth and stimulate gums</li>
        </ul>
        
        <h2>Common Dental Issues in Children</h2>
        <h3>Tooth Decay</h3>
        <p>Tooth decay is the most common chronic disease in children. It occurs when bacteria in the mouth produce acids that erode tooth enamel.</p>
        
        <h3>Thumb Sucking</h3>
        <p>Many children suck their thumbs or fingers as a comfort mechanism. While this is normal for infants, if it continues past age 4-5, it can lead to alignment issues with the teeth.</p>
        
        <h3>Dental Injuries</h3>
        <p>Active children often experience dental injuries from falls or during play. Know what to do in case of a knocked-out or chipped tooth, and encourage the use of mouthguards during sports.</p>
        
        <h2>The Role of Regular Dental Check-ups</h2>
        <p>Regular dental visits are crucial for children. During these appointments, the dentist will:</p>
        <ul>
          <li>Check for cavities and other issues</li>
          <li>Clean the teeth to remove plaque buildup</li>
          <li>Apply fluoride treatments or sealants to prevent decay</li>
          <li>Monitor growth and development of the teeth and jaws</li>
          <li>Provide education on proper oral hygiene techniques</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Establishing good dental habits early in life is one of the greatest gifts you can give your child. By teaching them the importance of oral hygiene, providing a healthy diet, and ensuring regular dental check-ups, you're setting them up for a lifetime of healthy smiles.</p>
      `
    },
    {
      id: "5",
      title: "Teeth Whitening: Professional vs. At-Home Options",
      slug: "teeth-whitening-options",
      date: "November 15, 2023",
      readTime: "5 min read",
      category: "Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1581585504807-45d83ec342ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      content: `
        <h2>Why Teeth Whitening is Popular</h2>
        <p>A bright, white smile can boost your confidence and leave a lasting impression. Over time, teeth can become stained due to various factors, including food and drink consumption (coffee, tea, red wine), tobacco use, aging, medications, and genetics. Teeth whitening offers a solution to remove discoloration and restore your smile's brilliance.</p>
        
        <h2>Professional Teeth Whitening</h2>
        <h3>In-Office Whitening</h3>
        <p>Professional whitening treatments performed in a dental office offer the most dramatic and immediate results. During an in-office procedure, your dentist will apply a high-concentration bleaching gel to your teeth, often activating it with a special light or laser. The entire process typically takes about 60-90 minutes.</p>
        
        <h3>Benefits of Professional Whitening</h3>
        <ul>
          <li>Fast results - often achieved in a single visit</li>
          <li>Significant whitening - can lighten teeth by several shades</li>
          <li>Professional supervision - reduces risks and ensures safety</li>
          <li>Custom treatment - tailored to your specific needs</li>
          <li>Long-lasting results - can last one to three years with proper maintenance</li>
        </ul>
        
        <h3>Potential Drawbacks</h3>
        <ul>
          <li>Cost - higher price point compared to at-home options</li>
          <li>Temporary sensitivity - some patients experience increased tooth sensitivity</li>
          <li>Time commitment - requires scheduling an appointment</li>
        </ul>
        
        <h2>At-Home Whitening Options</h2>
        <h3>Dentist-Provided Take-Home Kits</h3>
        <p>Many dentists offer custom-made trays with professional-grade whitening gel for use at home. These kits include trays that are molded to fit your teeth precisely, along with a bleaching solution that's typically milder than what's used in-office.</p>
        
        <h3>Over-the-Counter Products</h3>
        <p>There are numerous over-the-counter whitening products available, including:</p>
        <ul>
          <li>Whitening strips - thin, flexible strips coated with a peroxide-based gel</li>
          <li>Whitening toothpastes - contain mild abrasives and chemicals to remove surface stains</li>
          <li>Whitening gels - applied directly to the tooth surface with a small brush</li>
          <li>Whitening rinses - used like mouthwash to reduce existing stains and prevent new ones</li>
          <li>One-size-fits-all trays - similar to dentist-provided kits but not custom-fitted</li>
        </ul>
        
        <h3>Benefits of At-Home Whitening</h3>
        <ul>
          <li>Convenience - can be done on your own schedule</li>
          <li>Cost-effectiveness - generally less expensive than professional treatments</li>
          <li>Gradual whitening - allows for more control over the whitening process</li>
          <li>Reduced sensitivity - typically uses lower concentrations of bleaching agents</li>
        </ul>
        
        <h3>Potential Drawbacks</h3>
        <ul>
          <li>Slower results - may take weeks to achieve desired whitening</li>
          <li>Less dramatic whitening - may not lighten teeth as much as professional treatments</li>
          <li>Risk of misuse - improper application can lead to gum irritation or uneven results</li>
          <li>Variability in quality - not all products are equally effective</li>
        </ul>
        
        <h2>Which Option is Right for You?</h2>
        <p>The best teeth whitening method for you depends on several factors:</p>
        <ul>
          <li>Desired timeline - how quickly you want results</li>
          <li>Budget - how much you're willing to spend</li>
          <li>Severity of staining - deeper stains may require professional treatment</li>
          <li>Tooth sensitivity - if you have sensitive teeth, gentler options may be better</li>
          <li>Compliance - whether you'll consistently use at-home products as directed</li>
        </ul>
        
        <h2>Maintaining Your Whiter Smile</h2>
        <p>Once you've achieved your desired level of whitening, these habits can help maintain your results:</p>
        <ul>
          <li>Brush and floss regularly</li>
          <li>Rinse your mouth after consuming staining foods and beverages</li>
          <li>Use a straw when drinking darkly colored beverages</li>
          <li>Limit consumption of staining substances like coffee, tea, red wine, and tobacco</li>
          <li>Consider touch-up treatments as needed</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Both professional and at-home teeth whitening options have their place, depending on your specific needs, preferences, and budget. For the best advice on which option is right for you, consult with your dentist. They can evaluate your oral health, discuss your goals, and recommend the most suitable whitening approach.</p>
      `
    },
    {
      id: "6",
      title: "What to Expect During a Root Canal Treatment",
      slug: "what-to-expect-during-root-canal",
      date: "December 3, 2023",
      readTime: "6 min read",
      category: "Endodontics",
      image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <h2>Understanding Root Canal Treatment</h2>
        <p>A root canal is a dental procedure used to treat infection at the center of a tooth (the root canal system). The treatment is needed when the pulp inside your tooth, which contains nerves and blood vessels, becomes infected or inflamed due to deep decay, repeated dental procedures, cracks, or injury.</p>
        
        <h2>Common Myths vs. Reality</h2>
        <p>Root canals have an undeserved reputation for being extremely painful. In reality, with modern techniques and anesthesia, a root canal procedure is typically no more uncomfortable than getting a filling. In fact, root canals relieve pain, not cause it.</p>
        
        <h2>Signs You Might Need a Root Canal</h2>
        <ul>
          <li>Severe tooth pain, especially when chewing or applying pressure</li>
          <li>Prolonged sensitivity to hot or cold temperatures</li>
          <li>Discoloration of the tooth</li>
          <li>Swelling and tenderness in nearby gums</li>
          <li>A persistent or recurring pimple on the gums</li>
        </ul>
        
        <h2>The Root Canal Procedure: Step by Step</h2>
        <h3>Initial Examination</h3>
        <p>Your dentist will take X-rays to examine the shape of your root canals and determine if there are signs of infection in the surrounding bone.</p>
        
        <h3>Anesthesia</h3>
        <p>Local anesthesia will be administered to numb the area around the affected tooth. You'll remain awake during the procedure, but you shouldn't feel any pain.</p>
        
        <h3>Dental Dam Placement</h3>
        <p>A rubber dam will be placed around the tooth to keep it dry and free from saliva during the procedure.</p>
        
        <h3>Access Opening</h3>
        <p>The dentist will create a small opening in the crown of your tooth to access the pulp chamber and root canals.</p>
        
        <h3>Pulp Removal and Cleaning</h3>
        <p>Using special instruments, the infected or inflamed pulp is removed. The inside of the tooth is then carefully cleaned and shaped to prepare it for filling.</p>
        
        <h3>Filling the Root Canals</h3>
        <p>Once the canals are cleaned and shaped, they are filled with a rubber-like material called gutta-percha, which is sealed in place with adhesive cement.</p>
        
        <h3>Temporary or Permanent Filling</h3>
        <p>A temporary filling is placed to close the access opening. Later, this will be replaced with a permanent filling or crown.</p>
        
        <h3>Crown Placement</h3>
        <p>In most cases, a crown is needed to protect the treated tooth and restore its full function. This is typically done in a separate appointment.</p>
        
        <h2>After the Procedure</h2>
        <h3>What to Expect</h3>
        <p>It's normal to experience some tenderness in the area for a few days after the procedure, especially if there was pain or infection before the root canal. This discomfort can usually be managed with over-the-counter pain medications.</p>
        
        <h3>Aftercare Instructions</h3>
        <ul>
          <li>Avoid chewing on the treated tooth until the permanent restoration is placed</li>
          <li>Maintain good oral hygiene by brushing and flossing regularly</li>
          <li>Take any prescribed medications as directed</li>
          <li>Return for your follow-up appointment to have the permanent restoration placed</li>
        </ul>
        
        <h2>Success Rate and Longevity</h2>
        <p>Root canal treatments have a high success rate, with many treated teeth lasting a lifetime with proper care. The key to long-term success is getting a proper restoration (like a crown) after the root canal and maintaining good oral hygiene.</p>
        
        <h2>Alternatives to Root Canal Treatment</h2>
        <p>The main alternative to a root canal is tooth extraction. However, extraction should generally be considered a last resort, as saving your natural tooth is usually the best option for your dental health. If extraction is necessary, the missing tooth should be replaced with a dental implant, bridge, or partial denture to prevent shifting of surrounding teeth.</p>
        
        <h2>Conclusion</h2>
        <p>A root canal procedure, while often dreaded, is actually a pain-relieving treatment that can save your natural tooth and prevent the need for extraction. With modern techniques and proper anesthesia, the procedure is comparable to getting a routine filling. If you're experiencing symptoms that might indicate the need for a root canal, don't delay seeking treatment — addressing the issue promptly can prevent further pain and more extensive dental work.</p>
      `
    }
  ];

  const currentPost = blogPosts.find(post => post.slug === slug);
  
  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts based on the category
  const relatedPosts = blogPosts
    .filter(post => post.category === currentPost.category && post.id !== currentPost.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-semibold text-primary">Dental Solutions</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
              >
                Book Appointment
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.href} 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-primary text-white hover:bg-primary/90 w-full"
              onClick={() => {
                window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
                setIsNavOpen(false);
              }}
            >
              Book Appointment on WhatsApp
            </Button>
          </div>
        </div>
      )}

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-4"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={currentPost.image} 
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-4 rounded">
                    {currentPost.category}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{currentPost.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{currentPost.readTime}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{currentPost.title}</h1>
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: currentPost.content }}
                  />
                </div>
              </motion.div>

              <div className="mt-12 bg-muted p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Dental Health?</h2>
                <p className="text-gray-600 mb-6">
                  Schedule an appointment with our experienced dental professionals today and take the first step towards a healthier smile.
                </p>
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
                  onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
                >
                  Book Your Appointment Now
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">Related Articles</h3>
                  {relatedPosts.length > 0 ? (
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <div key={post.id} className="group">
                          <Link to={`/blog/${post.slug}`} className="flex gap-3">
                            <div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{post.title}</h4>
                              <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No related articles found.</p>
                  )}
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+91 8600892884</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">Dental Solutions, Palghar, Maharashtra</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-primary text-white hover:bg-primary/90"
                      onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Dental Solutions</h4>
              <p className="text-gray-400">
                Dental Solutions Palghar is a leading dental clinic committed to providing high-quality oral healthcare with a patient-first approach.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400">Phone: +91 8600892884</p>
              <p className="text-gray-400">Address: Dental Solutions, Palghar, Maharashtra</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dental Solutions Palghar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
