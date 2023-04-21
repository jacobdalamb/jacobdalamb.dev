import { z } from "zod";


const Testimonial = z.array(z.object({
	client: z.string(),
	testimony: z.string(),
	job: z.string(),
}));

const Screenshot = z.object({
    before: z.string(),
    after: z.string(),
});

const Work = z.array(z.object({
	title: z.string(),
	url: z.string().url(),
	screenshot: Screenshot,
}));

const testimonials: { client: string; testimony: string; job: string }[] = [
    {
        testimony:
        "I've been using this product for a month now and it's truly life-changing. My skin has never looked better and I feel more confident than ever!",
        client: "John Smith",
        job: "CEO of ABC",
    },
    {
        client: "Jane Smith",
        testimony:
            "I can't believe how easy this app is to use! It has saved me so much time and hassle. I highly recommend it to anyone looking for a more efficient way to manage their tasks",
        job: "CEO of XYZ",
    },
    {
        client: "Amy Lamb",
        testimony:
            "I was hesitant to try this service, but I'm so glad I did. The quality of their work is outstanding and their customer service is top-notch. I will definitely be using them again in the future",
        job: "CEO of LambFamily",
    },
    {
        client: "Clara Johnson",
        testimony:
            "I was hesitant to try this service, but I'm so glad I did. The quality of their work is outstanding and their customer service is top-notch. I will definitely be using them again in the future",
        job: "CEO of CDT",
    },
    {
        client: "Bob Ying",
        testimony:
            "I was hesitant to try this service, but I'm so glad I did. The quality of their work is outstanding and their customer service is top-notch. I will definitely be using them again in the future",
        job: "CEO of TNU",
    },
];

const works: { title: string; url: string; screenshot: { before: string; after: string } }[] = [
    {
        title: "Temple Aviv Judea",
        url: "https://www.avivjudea.org/",
        screenshot: {
            before: "assets/temple_aviv_judea_before.png",
            after: "assets/temple_aviv_judea_after.png",
        },
    },
    // {
    //     title: "Beth Shalom",
    //     url: "https://www.bethshalomcorona.com/",
    //     screenshot: {
    //         before: "assets/beth_shalom_before.png",
    //         after: "assets/beth_shalom_after.png",
    //     },
    // },
];



export const validatedTestimonials = Testimonial.parse(testimonials);
export const validatedWorks = Work.parse(works);
