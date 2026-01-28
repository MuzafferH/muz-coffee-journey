/*
  Content Collections Configuration
  Defines the structure (schema) for coffee shops and beans.

  Think of this like a template or form:
  - Each shop must have a name, city, country, etc.
  - Each bean must have an origin, roaster, tasting notes, etc.
  - Astro validates your content against these schemas

  After adding a new shop/bean markdown file, Astro checks it matches the schema.
*/

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Coffee Shop Collection Schema
  Each .md file in src/content/shops/ must have these fields in its frontmatter
*/
const shopsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shops' }),
  schema: z.object({
    // Basic info
    name: z.string(),                          // "Fuglen Tokyo"
    city: z.string(),                          // "Tokyo"
    country: z.string(),                       // "Japan"
    neighborhood: z.string().optional(),       // "Tomigaya"

    // Location for the map
    coordinates: z.tuple([z.number(), z.number()]),  // [latitude, longitude]

    // Your rating (1-5 stars)
    rating: z.number().min(1).max(5),

    // When you visited
    visited: z.date(),

    // Links (all optional)
    website: z.string().url().optional(),
    instagram: z.string().optional(),
    googleMaps: z.string().url().optional(),

    // Images
    featuredImage: z.string(),                 // Main photo path
    gallery: z.array(z.string()).optional(),   // Additional photos

    // Related beans you tried there
    beans: z.array(z.string()).optional(),     // List of bean slugs

    // Tags for filtering
    tags: z.array(z.string()).optional(),      // ["specialty", "filter", "wifi"]
  }),
});

/*
  Bean Collection Schema
  Each .md file in src/content/beans/ must have these fields
*/
const beansCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beans' }),
  schema: z.object({
    // Basic info
    name: z.string(),                          // "Ethiopia Yirgacheffe"
    roaster: z.string(),                       // "Fuglen"
    origin: z.string(),                        // "Ethiopia"
    region: z.string().optional(),             // "Yirgacheffe"

    // Processing & roast
    process: z.string().optional(),            // "Washed", "Natural", "Honey"
    roastLevel: z.enum(['Light', 'Medium-Light', 'Medium', 'Medium-Dark', 'Dark']).optional(),

    // Flavor profile - what you tasted
    tastingNotes: z.array(z.string()),         // ["citrus", "floral", "bergamot"]

    // Your rating (1-5 stars)
    rating: z.number().min(1).max(5),

    // Where you tried it (shop slugs)
    triedAt: z.array(z.string()).optional(),   // ["fuglen-tokyo"]

    // Image
    image: z.string().optional(),              // Bean bag photo
  }),
});

// Export the collections so Astro knows about them
export const collections = {
  shops: shopsCollection,
  beans: beansCollection,
};
