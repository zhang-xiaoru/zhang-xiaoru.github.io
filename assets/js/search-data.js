// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-dft-calculations-using-quantum-espresso",
        
          title: "DFT Calculations Using Quantum ESPRESSO",
        
        description: "Setting up QE-modes in Emacs for editing Quantum ESPRESSO input files",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/qe/";
          
        },
      },{id: "post-longest-palindromic-substring",
        
          title: "Longest Palindromic Substring",
        
        description: "Find the longest palindromic substring in a given string s",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/longest-palindromic/";
          
        },
      },{id: "post-negative-binomial-distribution",
        
          title: "Negative Binomial Distribution",
        
        description: "A brief note on the negative binomial distribution",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/negtive-binom/";
          
        },
      },{id: "post-catalan-numbers",
        
          title: "Catalan Numbers",
        
        description: "Counting binary strings with non-exceeding segments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/catalan-num/";
          
        },
      },{id: "post-latex-to-word-conversion",
        
          title: "LaTeX to Word Conversion",
        
        description: "Convert LaTeX files into Word with formatting",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/latex-2-word/";
          
        },
      },{id: "post-guide-to-tacc",
        
          title: "Guide to TACC",
        
        description: "A note on using the Texas Advanced Computing Center (TACC)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/tacc-lonestar6/";
          
        },
      },{id: "post-enable-markdown-callout-in-hugo",
        
          title: "Enable Markdown Callout in Hugo",
        
        description: "Add markdown callout in Hugo blog",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/callout/";
          
        },
      },{id: "post-python-type-annotations",
        
          title: "Python Type Annotations",
        
        description: "Adding type hints to Python functions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/type-anno/";
          
        },
      },{id: "post-martingales",
        
          title: "Martingales",
        
        description: "A short intro to martingales",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/martingales/";
          
        },
      },{id: "post-cross-validation-for-time-series-data",
        
          title: "Cross Validation For Time Series Data",
        
        description: "How to perform cross-validation for time series data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/timeseries-cv/";
          
        },
      },{id: "post-make-shortcut-for-directory-in-zsh",
        
          title: "Make shortcut for directory in zsh",
        
        description: "Ways to make shortcuts to working directories",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/dir-shortcut/";
          
        },
      },{id: "post-decision-tree",
        
          title: "Decision Tree",
        
        description: "Decision tree model in machine learning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/decision-tree/";
          
        },
      },{id: "post-simple-random-walk",
        
          title: "Simple Random Walk",
        
        description: "Notes on simple random walks",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/simple-random-walk/";
          
        },
      },{id: "post-significance-test",
        
          title: "Significance test",
        
        description: "A short intro to statistical tests",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/hypo-test/";
          
        },
      },{id: "post-how-to-uninstall-pkg-in-macos",
        
          title: "How to uninstall pkg in macOS",
        
        description: "Clean up unused pkgs in macOS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/uninstall-pkg/";
          
        },
      },{id: "post-create-a-blog-with-hugo-and-the-papermod-theme",
        
          title: "Create a Blog with Hugo and the PaperMod Theme",
        
        description: "Making a static blog using Hugo and the PaperMod theme",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/make-blog/";
          
        },
      },{id: "projects-predict-commuting-transportation-choice",
          title: 'Predict Commuting Transportation Choice',
          description: "[&quot;Logistic regression with hierarchical Bayesian model. Predicting binary commuting methods choice with grouping effect. Implemented in R with JAGS package.\\Course project for SDS384-7 Bayesian Statistical Methods.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bayesian/";
            },},{id: "projects-impact-of-financial-indicators-on-stock-market-performance",
          title: 'Impact of Financial Indicators on Stock Market Performance',
          description: "Regression analysis on 400+ US public trade farm. Performed model selection process and residual diagnostic. Implemented and visualized result in R. Course project for M384G Regression Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/linearReg/";
            },},{id: "projects-classifying-stellar-multiplicity",
          title: 'Classifying Stellar Multiplicity',
          description: "Classification of star system multiplicity using features extracted from simulated evoluationary data. Implemented in Python with Scikit-learn. Course project for CSE382M Fundational Technics in Machine Learning &amp; Data Science.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stellarClass/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6F%72%75%7A%68%61%6E%67@%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhang-xiaoru", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xiaoru-zhang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
