# Meta Tags & Schema Strategy
**All Pro Duct Cleaning - Technical SEO Implementation**

## Meta Title & Description Templates

### Homepage Meta Tags
```html
<title>Air Duct Cleaning Portland OR & Vancouver WA | All Pro Duct Cleaning</title>
<meta name="description" content="Professional air duct cleaning in Portland OR & Vancouver WA. EPA certified, same-day service, 100% satisfaction guarantee. Free estimates. Call (503) 555-0123!">
```

### Service Page Meta Tags
```html
<!-- Air Duct Cleaning Service -->
<title>Air Duct Cleaning Portland & Vancouver | Professional HVAC Cleaning | All Pro</title>
<meta name="description" content="Professional air duct cleaning in Portland OR & Vancouver WA. Improve air quality, reduce energy costs. Licensed, insured. Starting at $299. Free quote!">

<!-- Dryer Vent Cleaning Service -->
<title>Dryer Vent Cleaning Portland OR & Vancouver WA | Lint Removal | All Pro</title>
<meta name="description" content="Professional dryer vent cleaning in Portland OR & Vancouver WA. Prevent fires, improve efficiency. Licensed technicians. Starting at $149. Call today!">

<!-- HVAC Maintenance Service -->
<title>HVAC Maintenance Portland OR & Vancouver WA | System Cleaning | All Pro</title>
<meta name="description" content="Professional HVAC maintenance in Portland OR & Vancouver WA. System cleaning, coil maintenance, filter replacement. Licensed experts. Call now!">
```

### Location Page Meta Tags
```html
<!-- Vancouver, WA Main -->
<title>Air Duct Cleaning Vancouver WA | Top Rated Local Service | All Pro</title>
<meta name="description" content="#1 air duct cleaning in Vancouver WA. Local experts serving all Vancouver neighborhoods. EPA certified, same-day service. Free estimates. Call now!">

<!-- Portland, OR Main -->
<title>Air Duct Cleaning Portland Oregon | Professional HVAC Cleaning | All Pro</title>
<meta name="description" content="Top-rated air duct cleaning in Portland OR. Serving all Portland neighborhoods. Professional, licensed, guaranteed. Free estimates. Call today!">

<!-- Neighborhood Examples -->
<title>Air Duct Cleaning Pearl District Portland | Local HVAC Service | All Pro</title>
<meta name="description" content="Professional air duct cleaning in Pearl District, Portland OR. Local experts, same-day service, 5-star reviews. Free estimates. Call (503) 555-0123!">

<title>Air Duct Cleaning Downtown Vancouver WA | Local Service | All Pro</title>
<meta name="description" content="Air duct cleaning in Downtown Vancouver WA. Licensed technicians, transparent pricing, satisfaction guaranteed. Free quotes. Call today!">
```

## Comprehensive Schema.org Implementation

### 1. LocalBusiness Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allproductcleaning.com/#organization",
  "name": "All Pro Duct Cleaning",
  "alternateName": "All Pro Duct Cleaning LLC",
  "description": "Professional air duct cleaning services in Portland, OR and Vancouver, WA. EPA certified technicians providing comprehensive HVAC cleaning, dryer vent cleaning, and indoor air quality improvement services.",
  "url": "https://allproductcleaning.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://allproductcleaning.com/assets/images/all-pro-logo.png",
    "width": 300,
    "height": 120
  },
  "image": [
    "https://allproductcleaning.com/assets/images/all-pro-logo.png",
    "https://allproductcleaning.com/assets/images/hero-duct-cleaning.jpg",
    "https://allproductcleaning.com/assets/images/team-photo.jpg"
  ],
  "telephone": "+1-503-555-0123",
  "email": "info@allproductcleaning.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "1234 Main St",
      "addressLocality": "Portland", 
      "addressRegion": "OR",
      "postalCode": "97201",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress", 
      "streetAddress": "5678 Mill Plain Blvd",
      "addressLocality": "Vancouver",
      "addressRegion": "WA", 
      "postalCode": "98663",
      "addressCountry": "US"
    }
  ],
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": 45.5152,
      "longitude": -122.6784,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portland",
        "addressRegion": "OR"
      }
    },
    {
      "@type": "GeoCoordinates", 
      "latitude": 45.6387,
      "longitude": -122.6615,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver", 
        "addressRegion": "WA"
      }
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Portland",
      "containedInPlace": {
        "@type": "State",
        "name": "Oregon",
        "containedInPlace": {
          "@type": "Country", 
          "name": "United States"
        }
      }
    },
    {
      "@type": "City",
      "name": "Vancouver",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington",
        "containedInPlace": {
          "@type": "Country",
          "name": "United States" 
        }
      }
    },
    {
      "@type": "City",
      "name": "Beaverton",
      "containedInPlace": {
        "@type": "State",
        "name": "Oregon"
      }
    },
    {
      "@type": "City", 
      "name": "Lake Oswego",
      "containedInPlace": {
        "@type": "State",
        "name": "Oregon"
      }
    },
    {
      "@type": "City",
      "name": "Tigard", 
      "containedInPlace": {
        "@type": "State",
        "name": "Oregon"
      }
    },
    {
      "@type": "City",
      "name": "Hillsboro",
      "containedInPlace": {
        "@type": "State", 
        "name": "Oregon"
      }
    },
    {
      "@type": "City",
      "name": "Camas",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    },
    {
      "@type": "City",
      "name": "Washougal", 
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Debit Card"],
  "currenciesAccepted": "USD",
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-17:00"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Air Duct & HVAC Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "@id": "https://allproductcleaning.com/services/air-duct-cleaning/#offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air Duct Cleaning",
          "description": "Professional air duct cleaning to improve indoor air quality and HVAC system efficiency",
          "provider": {
            "@id": "https://allproductcleaning.com/#organization"
          },
          "areaServed": [
            "Portland, OR",
            "Vancouver, WA"
          ],
          "serviceType": "Air Duct Cleaning"
        },
        "price": "299",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "@id": "https://allproductcleaning.com/services/dryer-vent-cleaning/#offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dryer Vent Cleaning",
          "description": "Professional dryer vent cleaning to prevent fire hazards and improve dryer efficiency",
          "provider": {
            "@id": "https://allproductcleaning.com/#organization"
          },
          "areaServed": [
            "Portland, OR", 
            "Vancouver, WA"
          ],
          "serviceType": "Dryer Vent Cleaning"
        },
        "price": "149",
        "priceCurrency": "USD", 
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "@id": "https://allproductcleaning.com/services/hvac-maintenance/#offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC Maintenance",
          "description": "Comprehensive HVAC system maintenance including coil cleaning and system optimization",
          "provider": {
            "@id": "https://allproductcleaning.com/#organization"
          },
          "areaServed": [
            "Portland, OR",
            "Vancouver, WA"
          ],
          "serviceType": "HVAC Maintenance"
        },
        "price": "199",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31", 
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating", 
    "ratingValue": "4.9",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "@id": "https://allproductcleaning.com/#review-1",
      "reviewBody": "All Pro did an amazing job cleaning our air ducts. The team was professional, punctual, and thorough. Our home's air quality has noticeably improved, and our energy bills have gone down. Highly recommend!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5" 
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      },
      "datePublished": "2025-10-15"
    },
    {
      "@type": "Review",
      "@id": "https://allproductcleaning.com/#review-2", 
      "reviewBody": "Exceptional service! They showed up on time, explained the process clearly, and the results were incredible. The before and after photos really showed how much debris was in our ducts. Great value!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michael Chen"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Yelp"
      },
      "datePublished": "2025-09-22"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/allproductcleaning",
    "https://www.instagram.com/allproductcleaning", 
    "https://www.linkedin.com/company/allproductcleaning",
    "https://www.yelp.com/biz/all-pro-duct-cleaning",
    "https://www.bbb.org/us/or/portland/profile/air-duct-cleaning/all-pro-duct-cleaning"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Better Business Bureau",
      "url": "https://www.bbb.org"
    },
    {
      "@type": "Organization", 
      "name": "National Air Duct Cleaners Association",
      "url": "https://nadca.com"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "EPA Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Environmental Protection Agency"
      }
    }
  ],
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Free Air Duct Inspection",
      "description": "Complimentary in-home air duct inspection and estimate"
    },
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### 2. Service Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://allproductcleaning.com/services/air-duct-cleaning/#service",
  "name": "Professional Air Duct Cleaning",
  "description": "Comprehensive air duct cleaning service using EPA-approved methods and state-of-the-art equipment to improve indoor air quality and HVAC system efficiency.",
  "provider": {
    "@id": "https://allproductcleaning.com/#organization"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Portland",
      "containedInPlace": {
        "@type": "State",
        "name": "Oregon"
      }
    },
    {
      "@type": "City", 
      "name": "Vancouver",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    }
  ],
  "serviceType": "Air Duct Cleaning",
  "category": "HVAC Services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Air Duct Cleaning Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Standard Air Duct Cleaning",
        "description": "Complete air duct cleaning for homes up to 2,500 sq ft",
        "price": "299",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "name": "Premium Air Duct Cleaning", 
        "description": "Complete air duct cleaning with sanitization for homes up to 3,500 sq ft",
        "price": "399",
        "priceCurrency": "USD"
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Homeowners and Property Managers"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": "+1-503-555-0123",
    "serviceUrl": "https://allproductcleaning.com/quote/"
  }
}
```

### 3. FAQ Schema (FAQ Sections)
```json
{
  "@context": "https://schema.org", 
  "@type": "FAQPage",
  "@id": "https://allproductcleaning.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I have my air ducts cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The EPA recommends having your air ducts cleaned every 3-5 years under normal conditions. However, you may need more frequent cleaning if you have pets, smokers in the home, recent renovations, or family members with allergies or respiratory issues."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of air duct cleaning?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Air duct cleaning improves indoor air quality, reduces allergens and irritants, increases HVAC efficiency, extends equipment life, eliminates odors, and can lower energy costs by up to 20%."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the air duct cleaning process take?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Most residential air duct cleaning services take 3-5 hours depending on the size of your home and the condition of your ductwork. We'll provide an accurate time estimate during your initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Is air duct cleaning messy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all! We use powerful vacuum systems that contain all debris and dust. We also protect your home with drop cloths and take great care to keep your living spaces clean throughout the process."
      }
    },
    {
      "@type": "Question",
      "name": "How much does air duct cleaning cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our air duct cleaning services start at $299 for standard residential cleaning. The final cost depends on the size of your home, number of vents, and condition of your ductwork. We provide free, no-obligation estimates."
      }
    }
  ]
}
```

### 4. BreadcrumbList Schema (Navigation)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList", 
  "@id": "https://allproductcleaning.com/locations/portland/pearl-district/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://allproductcleaning.com/"
    },
    {
      "@type": "ListItem",
      "position": 2, 
      "name": "Service Areas",
      "item": "https://allproductcleaning.com/locations/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Portland, OR", 
      "item": "https://allproductcleaning.com/locations/portland/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Pearl District",
      "item": "https://allproductcleaning.com/locations/portland/pearl-district/"
    }
  ]
}
```

### 5. Organization Schema (About Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://allproductcleaning.com/#organization",
  "name": "All Pro Duct Cleaning",
  "alternateName": "All Pro Duct Cleaning LLC",
  "url": "https://allproductcleaning.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://allproductcleaning.com/assets/images/all-pro-logo.png"
  },
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Chad Johnson",
    "jobTitle": "Owner & Lead Technician"
  },
  "employee": [
    {
      "@type": "Person", 
      "name": "Chad Johnson",
      "jobTitle": "Owner & Lead Technician",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "EPA Certification" 
        }
      ]
    }
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue", 
    "minValue": 5,
    "maxValue": 10
  },
  "slogan": "Breathe Cleaner Air with Professional Duct Cleaning",
  "description": "All Pro Duct Cleaning has been serving Portland, OR and Vancouver, WA since 2015, providing professional air duct cleaning, dryer vent cleaning, and HVAC maintenance services. Our EPA-certified technicians use state-of-the-art equipment and proven methods to improve indoor air quality and HVAC system efficiency.",
  "knowsAbout": [
    "Air Duct Cleaning",
    "Dryer Vent Cleaning", 
    "HVAC Maintenance",
    "Indoor Air Quality",
    "EPA Guidelines", 
    "NADCA Standards"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "National Air Duct Cleaners Association",
    "url": "https://nadca.com"
  }
}
```

## OpenGraph & Twitter Card Templates

### Homepage OpenGraph
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="All Pro Duct Cleaning">
<meta property="og:title" content="Professional Air Duct Cleaning Portland OR & Vancouver WA">
<meta property="og:description" content="EPA certified air duct cleaning in Portland OR & Vancouver WA. Same-day service, 100% satisfaction guarantee. Free estimates available!">
<meta property="og:url" content="https://allproductcleaning.com/">
<meta property="og:image" content="https://allproductcleaning.com/assets/images/og-homepage.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Professional air duct cleaning service team at work">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="All Pro Duct Cleaning">
<meta property="article:publisher" content="https://www.facebook.com/allproductcleaning">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@allproductcleaning">
<meta name="twitter:creator" content="@allproductcleaning">
<meta name="twitter:title" content="Professional Air Duct Cleaning Portland OR & Vancouver WA">
<meta name="twitter:description" content="EPA certified air duct cleaning in Portland OR & Vancouver WA. Same-day service, 100% satisfaction guarantee. Free estimates!">
<meta name="twitter:image" content="https://allproductcleaning.com/assets/images/twitter-card.jpg">
<meta name="twitter:image:alt" content="Professional air duct cleaning service">
```

## Technical Implementation Guidelines

### Meta Tag Best Practices:
1. **Title Tags**: 50-60 characters, include primary keyword and location
2. **Meta Descriptions**: 150-160 characters, include CTA and phone number
3. **Canonical Tags**: Required on every page to prevent duplicate content
4. **Robots Meta**: Use "index, follow" for all public pages
5. **Viewport Meta**: Essential for mobile responsiveness

### Schema Implementation:
1. **JSON-LD Format**: Preferred over microdata or RDFa
2. **Validation**: Test all schema with Google's Rich Results Test
3. **Multiple Schemas**: Combine LocalBusiness, Service, FAQ, and Review schemas
4. **Unique IDs**: Use @id for linking related schema objects
5. **Regular Updates**: Keep review counts and ratings current

### Location-Specific Schema:
1. **Separate Coordinates**: Unique geo coordinates for each service location
2. **Service Area Arrays**: Include all neighborhoods and cities served  
3. **Local Phone Numbers**: Different numbers for different areas if available
4. **Address Variations**: Full addresses for main locations, service areas for coverage

### Performance Considerations:
1. **Schema Size**: Keep individual schema blocks under 2KB when possible
2. **Critical CSS**: Include essential meta tags in critical CSS
3. **Preconnect**: Add preconnect tags for external resources (fonts, analytics)
4. **Lazy Loading**: Implement for non-critical schema and meta content

This comprehensive meta tag and schema strategy will provide maximum SEO value while ensuring rich snippet eligibility and enhanced local search visibility.