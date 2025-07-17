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
  },{id: "nav-research",
          title: "research",
          description: "Research interest",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
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
        },{id: "post-negative-binomial-distribution",
        
          title: "Negative Binomial Distribution",
        
        description: "a brife note for negtivae binomial distribution",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/negtive-binom/";
          
        },
      },{id: "post-catalan-numbers",
        
          title: "Catalan Numbers",
        
        description: "counting for binary string with non-exceeding segments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/catalan-num/";
          
        },
      },{id: "post-latex-to-word-conversion",
        
          title: "LaTex To Word Conversion",
        
        description: "convert LaTex file into Word with formatting",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/latex-2-word/";
          
        },
      },{id: "post-guide-to-tacc",
        
          title: "Guide to TACC",
        
        description: "a note for using Texas Advanced Computing Center (TACC)",
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
        
        description: "making type hint for Python functions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/type-anno/";
          
        },
      },{id: "post-martingales",
        
          title: "Martingales",
        
        description: "a short intro to martingales",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/martingales/";
          
        },
      },{id: "post-cross-validation-for-time-series-data",
        
          title: "Cross Validation For Time Series Data",
        
        description: "how to perform cross validation for time sequence data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/timeseries-cv/";
          
        },
      },{id: "post-make-shortcut-for-directory-in-zsh",
        
          title: "Make shortcut for directory in zsh",
        
        description: "way to make shortcut to working directories",
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
        
        description: "note in simple random walk",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/simple-random-walk/";
          
        },
      },{id: "post-significance-test",
        
          title: "Significance test",
        
        description: "A short intro to statistical test",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/hypo-test/";
          
        },
      },{id: "post-how-to-uninstall-pkg-in-macos",
        
          title: "How to uninstall pkg in MacOS",
        
        description: "clean unused pkgs in MacOS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/uninstall-pkg/";
          
        },
      },{id: "post-create-blog-with-hugo-and-papermod-themes",
        
          title: "Create blog with Hugo and PaperMod themes",
        
        description: "Making static blog web using Hugo and PaperMod themes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/make-blog/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-predicting-commuting-transportation-choice",
          title: 'Predicting Commuting Transportation Choice',
          description: "[&quot;Logistic regression with hierarchical Bayesian model. Implemented in R with JAGS package. COurse project for SDS384-7 Bayesian Statistical Methods.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bayesian/";
            },},{id: "projects-inverse-design-of-nano-scale-acoustic-surface",
          title: 'Inverse design of nano-scale acoustic surface',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/inverse/";
            },},{id: "projects-impact-of-financial-indicators-on-stock-market-performance",
          title: 'Impact of Financial Indicators on Stock Market Performance',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/linearReg/";
            },},{id: "projects-classifying-stellar-multiplicity",
          title: 'Classifying Stellar Multiplicity',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stellarClass/";
            },},{id: "research-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Research",handler: () => {
              window.location.href = "/research/inverseDesign/";
            },},{id: "research-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Research",handler: () => {
              window.location.href = "/research/metaAcoustic/";
            },},{id: "research-electro-optics-reservoir-computing",
          title: 'Electro-optics reservoir computing',
          description: "",
          section: "Research",handler: () => {
              window.location.href = "/research/reservoir/";
            },},{id: "research-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Research",handler: () => {
              window.location.href = "/research/structureLight/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6F%72%75%7A%68%61%6E%67@%75%74%65%78%61%73.%65%64%75%63%6F%6D", "_blank");
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
