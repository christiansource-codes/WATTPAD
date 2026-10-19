// ========== BOOK DATA (all 30 books) ==========
const books = [
    {
        id: 1,
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        genre: "Children's Fantasy",
        cover: "image/wherethewildthingsare_mauricesendak_01.jpg",
        chapter: "Chapter 1: The Wild Rumpus",
        story: "Max gets sent to his room without dinner and sails away to a land of playful monsters. There, he becomes the king of the wild things before returning home to his still-warm supper."
    },
    {
        id: 2,
        title: "The Wizard of Oz",
        author: "L. Frank Baum",
        genre: "Classic Fantasy",
        cover: "image/wizaedofoz_frankbaum_02.jpg",
        chapter: "Chapter 1: The Cyclone",
        story: "Dorothy and her dog Toto are whisked away by a tornado to a magical land filled with witches and wizards. Alongside new friends, she journeys down the yellow brick road to find her way back home to Kansas."
    },
    {
        id: 3,
        title: "Charlie and the Chocolate Factory",
        author: "Roald Dahl",
        genre: "Children's Fiction",
        cover: "image/charlieandthechocolatefactory_ Roald Dahl_03.jpg",
        chapter: "Chapter 1: Here Comes Charlie",
        story: "Young Charlie Bucket wins a golden ticket to tour the eccentric Willy Wonka's breathtaking confectionery empire. Inside, he experiences wondrous inventions and learns the value of kindness and humility."
    },
    {
        id: 4,
        title: "The Wild Robot",
        author: "Peter Brown",
        genre: "Sci-Fi / Adventure",
        cover: "image/TheWildRobot_PeterBrown_04.jpg",
        chapter: "Chapter 1: The Ocean",
        story: "A shipwrecked robot named Roz wakes up on a rugged, uninhabited island and must learn to survive among the local wildlife. She eventually adopts an orphaned gosling and builds a harmonious community with the island animals."
    },
    {
        id: 5,
        title: "Paddington",
        author: "Michael Bond",
        genre: "Children's Literature",
        cover: "image/Paddington_MichaelBond_05.jpg",
        chapter: "Chapter 1: Please Look After This Bear",
        story: "A polite and marmalade-loving bear from darkest Peru arrives at a London railway station with a note asking people to look after him. He is taken in by the Brown family, leading to a series of charming and chaotic household adventures."
    },
    {
        id: 6,
        title: "The Polar Express",
        author: "Chris Van Allsburg",
        genre: "Holiday Fantasy",
        cover: "image/The Polar Express_Chris Van Allsburg06.jpg",
        chapter: "Chapter 1: The Train",
        story: "On Christmas Eve, a doubting young boy boards a mysterious train hurtling through the night toward the North Pole. There, he receives a special gift from Santa Claus that proves the magic of Christmas lives on for those who truly believe."
    },
    {
        id: 7,
        title: "How to Train Your Dragon",
        author: "Cressida Cowell",
        genre: "Fantasy / Comedy",
        cover: "image/How to Train Your Dragon by Cressida Cowell_07.jpg",
        chapter: "Chapter 1: First Catch Your Dragon",
        story: "Hiccup, an unconventional Viking teenager, struggles to pass his tribe's dragon-catching initiation trial. Instead of fighting, he befriends a rare Night Fury dragon named Toothless, changing the future of his village forever."
    },
    {
        id: 8,
        title: "Jumanji",
        author: "Chris Van Allsburg",
        genre: "Adventure / Fantasy",
        cover: "image/Jumanji by Chris Van Allsburg_08.jpg",
        chapter: "Chapter 1: The Board Game",
        story: "Two bored children discover an abandoned board game that magically brings wild jungle perils directly into their living room. With every roll of the dice, the game intensifies until they manage to reach the finish line."
    },
    {
        id: 9,
        title: "Mary Poppins",
        author: "P. L. Travers",
        genre: "Fantasy",
        cover: "image/MaryPoppinsbyPLTRAVERS_09.jpg",
        chapter: "Chapter 1: East Wind",
        story: "A magical and stern nanny arrives blown by the East Wind to bring extraordinary adventures to the Banks children in London. Under her care, ordinary days transform into whimsical journeys filled with singing, dancing, and flying."
    },
    {
        id: 10,
        title: "The BFG",
        author: "Roald Dahl",
        genre: "Fantasy",
        cover: "image/thebfg_RoaldDahl_10.jpg",
        chapter: "Chapter 1: The Witching Hour",
        story: "A lonely orphan girl named Sophie is snatched away in the middle of the night by a giant who turns out to be wonderfully kind. Together, they hatch a clever plan to stop the other man-eating giants once and for all."
    },
    {
        id: 11,
        title: "The Bad Guys",
        author: "Aaron Blabey",
        genre: "Comedy / Graphic Novel",
        cover: "image/thebadguys_Aaron Blabey_11.jpg",
        chapter: "Chapter 1: The Good Deed",
        story: "A crew of notorious villainous animals attempt to perform good deeds to change their public image. Their hilarious attempts at heroism lead to unexpected chaos and genuine teamwork."
    },
    {
        id: 12,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        cover: "image/harrypottersorcerersstine_JKRowlings_12.jpg",
        chapter: "Chapter 1: The Boy Who Lived",
        story: "An orphaned boy discovers on his eleventh birthday that he is actually a famous wizard with a magical destiny awaiting him at Hogwarts School. There, he uncovers lifelong friendships, hidden talents, and the dark truth about his past."
    },
    {
        id: 13,
        title: "Bridge to Terabithia",
        author: "Katherine Paterson",
        genre: "Young Adult / Drama",
        cover: "image/bridgetotherabithia_Katherine Paterson_13.jpg",
        chapter: "Chapter 1: Jesse Oliver Aarons, Jr.",
        story: "Two lonely outcasts form a deep friendship and create a secret magical kingdom in the woods called Terabithia. This imaginative sanctuary helps them navigate the harsh realities of school life and personal tragedy."
    },
    {
        id: 14,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        genre: "Humor / Graphic Novel",
        cover: "image/diaryofwimpykid_jeffinney_14.jpg",
        chapter: "Chapter 1: September",
        story: "Middle school student Greg Heffley records his daily trials and tribulations in a journal while trying to navigate hallway politics and social survival. His hilarious misadventures capture the awkward realities of growing up."
    },
    {
        id: 15,
        title: "The Spiderwick Chronicles",
        author: "Tony DiTerlizzi and Holly Black",
        genre: "Fantasy / Adventure",
        cover: "image/spiderwickchronicles_Tony DiterLizzi_15.jpg",
        chapter: "Chapter 1: The Grace Children",
        story: "Three siblings move into an old dilapidated estate and discover a hidden field guide detailing a secret, invisible world of magical creatures. They must use their wits and the guide's wisdom to protect themselves from malicious goblins and ogres."
    },
    {
        id: 16,
        title: "The Lorax",
        author: "Dr. Seuss",
        genre: "Children's Fable",
        cover: "image/thelorax_DrSeuss_16.jpg",
        chapter: "Chapter 1: The Street of the Lifted Lorax",
        story: "A grumpy yet passionate creature speaks for the trees against a greedy industrialist who is destroying the forest for profit. The environmental fable ends with a message of hope and stewardship for the future generation."
    },
    {
        id: 17,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian / Action",
        cover: "image/thehungergames_suzzanecollins_17.jpg",
        chapter: "Chapter 1: The Reaping",
        story: "In a dystopian nation divided into districts, a young girl named Katniss Everdeen volunteers to take her sister's place in a televised fight to the death. Her defiance sparks a revolutionary rebellion against the tyrannical Capitol."
    },
    {
        id: 18,
        title: "Twilight",
        author: "Stephenie Meyer",
        genre: "Young Adult / Romance",
        cover: "image/twilight_stepheniemeyer_18.jpg",
        chapter: "Chapter 1: First Impressions",
        story: "A teenage girl moves to a rainy town and falls dangerously in love with a mysterious classmate who happens to be a vampire. Their romance faces intense perils from rival vampire covens and the struggles of an immortal world."
    },
    {
        id: 19,
        title: "The Maze Runner",
        author: "James Dashner",
        genre: "Dystopian / Sci-Fi",
        cover: "image/themazerunner_jamesdasner_19.jpg",
        chapter: "Chapter 1: The Box",
        story: "A teenage boy wakes up with no memories inside a massive, shifting labyrinth populated by other trapped youths. Together, they must solve the maze's deadly secrets to find an escape route to the outside world."
    },
    {
        id: 20,
        title: "Divergent",
        author: "Veronica Roth",
        genre: "Dystopian / Action",
        cover: "image/divergent_veronica_roth_20.jpg",
        chapter: "Chapter 1: The Choosing Ceremony",
        story: "In a society divided into factions based on personality traits, a young woman discovers she does not fit into any single category. This dangerous secret marks her as divergent, forcing her to fight a corrupt system that wants her eliminated."
    },
    {
        id: 21,
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        genre: "Coming-of-Age / Drama",
        cover: "image/theperksofbeingwallflower_stephenchbosky_21.jpg",
        chapter: "Chapter 1: Dear Friend",
        story: "An introverted freshman navigates the highs and lows of high school with the help of two eccentric seniors who take him under their wing. Through mix tapes, late-night drives, and profound conversations, he learns to participate actively in life."
    },
    {
        id: 22,
        title: "The Golden Compass",
        author: "Philip Pullman",
        genre: "Fantasy / Adventure",
        cover: "image/thegoldencompass_philippullman_22.jpg",
        chapter: "Chapter 1: The Decanter of Tokay",
        story: "A fierce young girl embarks on a dangerous quest to the frozen Arctic to rescue her kidnapped best friend. Armed with an alethiometer, she uncovers a vast conspiracy involving missing children and mysterious cosmic dust."
    },
    {
        id: 23,
        title: "Eragon",
        author: "Christopher Paolini",
        genre: "Epic Fantasy",
        cover: "image/eragorn_christopherpaolini_23.jpg",
        chapter: "Chapter 1: Discovery",
        story: "A farm boy discovers a polished blue stone that hatches into a magnificent dragon, revealing his destiny as a legendary dragon rider. He must embrace his newfound powers to help overthrow an evil king."
    },
    {
        id: 24,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "High Fantasy",
        cover: "image/thehobbit_jrrtolkien_24.jpg",
        chapter: "Chapter 1: An Unexpected Party",
        story: "A comfort-loving hobbit is swept into an epic quest by a wizard and a band of dwarves to reclaim their stolen mountain treasure from a fierce dragon. Along the way, he encounters magical creatures and stumbles upon a mysterious golden ring."
    },
    {
        id: 25,
        title: "Peter Pan",
        author: "J.M. Barrie",
        genre: "Classic Fantasy",
        cover: "image/peterpan_jmbarrie_25.jpg",
        chapter: "Chapter 1: Peter Breaks Through",
        story: "A magical boy who refuses to grow up takes three London children on a flight through the stars to the enchanting Neverland. There, they face pirates, fairies, and endless childhood adventures."
    },
    {
        id: 26,
        title: "Ready Player One",
        author: "Ernest Cline",
        genre: "Sci-Fi / Cyberpunk",
        cover: "image/readyplayerone_ernestcline_26.jpg",
        chapter: "Chapter 1: The OASIS",
        story: "In a dystopian future where humanity escapes harsh reality through a virtual reality universe, a teenager hunts for a hidden Easter egg left by the creator. Winning the ultimate prize requires mastering 1980s pop culture trivia and defeating ruthless corporate rivals."
    },
    {
        id: 27,
        title: "Ender's Game",
        author: "Orson Scott Card",
        genre: "Sci-Fi / Military",
        cover: "image/ender_orsonscottcard_27.jpg",
        chapter: "Chapter 1: Third",
        story: "A brilliantly gifted young boy is recruited into an elite orbital military academy to train for an impending alien invasion. Through rigorous battle simulations, he is pushed to his absolute limits to become humanity's ultimate defense."
    },
    {
        id: 28,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi / Epic",
        cover: "image/dune_frankherbert_28.jpg",
        chapter: "Chapter 1: Arrakis",
        story: "A young noble family accepts the stewardship of a harsh desert planet rich in a valuable resource called spice. Betrayed and cast out into the desert wastes, the young heir must fulfill an ancient prophecy to reclaim his family's honor."
    },
    {
        id: 29,
        title: "Catching Fire",
        author: "Suzanne Collins",
        genre: "Dystopian / Action",
        cover: "image/thehungergamescatchingfire_suzannecollins_29.jpg",
        chapter: "Chapter 1: The Victory Tour",
        story: "Following her victory in the games, Katniss Everdeen becomes a symbol of hope and rebellion for the oppressed districts. The Capitol retaliates by forcing previous victors back into a deadly new arena for a special anniversary edition."
    },
    {
        id: 30,
        title: "The Iron Giant",
        author: "Ted Hughes",
        genre: "Sci-Fi / Fable",
        cover: "image/theirongiant_tedhughes_30.jpg",
        chapter: "Chapter 1: The Coming of the Iron Man",
        story: "A young boy discovers a massive, towering metal robot fallen from space and forms a secret friendship with the gentle machine. When the military threatens to destroy the giant, it must choose whether to be a destructive weapon or a heroic savior."
    }
];

// ========== THEME TOGGLE ==========
function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
    }

    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

// Run on every page
document.addEventListener('DOMContentLoaded', initTheme);