import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    trips: defineTable({
        id: v.id("trip"),
        name: v.string(),
        description: v.string(),
        images: v.array(v.string()),
    }),
})
