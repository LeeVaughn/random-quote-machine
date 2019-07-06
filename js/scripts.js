const quotesArray = [
    ["Stay positive and don’t die.", "- William 'Drated Cuz' Broyles"],
    ["Stay positive and don’t die.", "- Jeff Cannata"],
    ["Stay tight." - "- Jimmy 'DJ Tyrant' Blocksom"],
    ["6.5 out of 10", "- IGN"],
    ["When I watch Rich play, I tell myself, 'Okay, so he practiced that. One hour of practice and I could do that'.", "- Taylor 'Arthelon' Eder"],
    ["Lagf", "- Christopher 'Zuna' Buechter"],
    ["                                                         323", "- Jiwoom 'Miwa' Yang"],
    ["You guys do know Nova is the best player killer in the game. A good Nova can beat anyone.", "- Jaehyung 'chu8' Park"],
    ["Indeed.", "- Jaycie 'Gillyweed' Gluck"],
    ["Oooooooaaaaaaaaahhhhh!", "- Jaycie 'Gillyweed' Gluck"],
    ["Report Abathur AFK", "- Half of the players in Alpha"],
    ["No comeback mechanics.", "- IGN"],
    ["Focus Morales!", "- At least one person on every team to ever face Lt. Morales"],
    ["Typical NA. Big mouths, small arms.", "- Thomas 'Mene' Cailleux"],
    ["Worth", "- The guy who just over extended and died."],
    ["Are you Bronze League?", "- D.Va"],
    ["Hey! I got an idea: How about you go 30 yards that away and stand real still?", "- Sgt. Hammer"],
    ["No man can defeat me. Although, 10 to 25 might do the trick.", "- Arthas"],
    ["If I had a face, I’d be glaring at you, right now.", "- Tyrael"],
    ["Conversation superfluous. Focus upon combat.", "- Abathur"],
    ["Pronouns. Unclear.", "- Abathur"],
    ["Logical decision.", "- Abathur"],
    ["Is this the best healing you can do?", "- Alarak"],
    ["You're not good at this, are you?", "- Alarak"],
    ["Have you come seeking wisdom? You certainly need it.", "- Alarak"],
    ["Free-to-Play is a delusion granted to the weak by the strong. Or so I've heard.", "- Alarak"],
    ["Wow!", "- Cattleprod"],
    ["*$@#s free!", "- Christopher 'Zuna' Buechter"],
    ["*$@#s free!", "- Mike 'Glaurung' Fisk"],
    ["Sometimes in life you lose, and sometimes you face NA.", "- Simon 'scHwimpi' Svensson"],
    ["Howdy ho!", "- Kyle Fergusson"],
    ["Friend?", "- Brightwing"],
    ["You got axe?", "- Zul’jin"],
    ["Who'd ya want me kill?", "- Zul’jin"],
    ["Make way for the bad guy.", "- Zul’jin"],
    ["Say hello to my little friend!", "- Zul’jin"],
    ["Shoes? What are those? What kind of monster wear little prisons on their feet?", "- Zul’jin"],
    ["Ah, I'd give my left arm for you to stop poking me.", "- Zul’jin"],
    ["I know we've been instructing you not to for years, but trust me. This one time, stand in the fire.", "- Alexstrasza"],
    ["There are old snipers, and there are bold snipers, but there's only one old bold sniper.", "- Ana"],
    ["Having faked my own death, I can never return to Overwatch. You have no idea how serious they are about insurance fraud.", "- Ana"],
    ["If you can feel the ground moving it's already too late.", "- Anub’arak"],
    ["Yes, my starship follows me wherever I go. It is like what you Terrans refers as 'a pet'. Only useful.", "- Artanis"],
    ["So, the Spear of Adun is right above me, yet Phasesmith Karax is nowhere to be found? Typical...", "- Artanis"],
    ["Darkness stopped calling. It’s alright, though. We are still friends through Real ID.", "- Arthas"],
    ["Ever get the feeling you're hearing voices in your helmet?", "- Arthas"],
    ["I will be twice the king my father was... and three times the dancer!", "- Arthas"],
    ["I once had a horse named Invincible. Turns out, he wasn't.", "- Arthas"],
    ["Leading the Sin Lieutenants is not easy. Sloth is late. Wrath is belligerent. Pride thinks Greed is stealing. Envy is jealous Greed gets away with it. And Gluttony tries to eat everyone. As for Lust, well, she is very... Distracting.", "- Azmodan"],
    ["Can everyone just stop for a moment? I need to write a series of log books about this battle, and then spend some time scattering them about.", "- Azmodan"],
    ["Have you ever wondered why so many people hide keys under rocks? And gold, for that matter.", "- Cassia"],
    ["Not all who wander are lost. I mean, sure, I'm lost, but not all of us are.", "- Chen"],
    ["You know, I have no idea why you mortals get so upset over spoilers. I know everything all the time, and I don't complain.", "- Chromie"],
    ["Uh, guys? Wasting left clicks doesn't count as raising your APM you know.", "- D.Va"],
    ["You know, I'm not such a bad guy, really. I'm just misunderstood.", "- Diablo"],
    ["Turned up to eleven!", "- ETC"],
    ["The wind at ma’ back, and a monster ‘tween my legs! Err...", "- Falstad"],
    ["I'm organizing a little surprise party for Jaina. It's going to be a blast.", "- Garrosh"],
    ["Hey, time is money, friend. And you're out of both!", "- Gazlowe"],
    ["Ah geez, this contraption is so crazy I can clearly see it’s nuts... And bolts. I said bolts. I said bolts, alright, I'm keeping it T for Teen here, people! God, you're so filthy!", "- Gazlowe"],
    ["Hmm? Of course, the sword is just for show! I have a gun, you fool!", "- Greymane"],
    ["It's not my fault if people want to pick me all the time. They simply recognize greatness when they see it.", "- Hanzo"],
    ["You know, for ten thousand years old Tyrande still looks pretty good. At least that’s what they tell me.", "- Illidan"],
    ["I hate to admit it but you were... uh... kind of prepared.", "- Illidan"],
    ["Is Maiev behind me? She's totally behind me, isn’t she?", "- Illidan"],
    ["Alright, does anyone else wonder where these weird little minion guys are coming from? I mean, they don’t even talk, either. Hello?! Hi!", "- Li Li"],
    ["Deaaath... no, I'm saying 'deeeebt'. It's far more frightening.", "- Malthael"],
    ["If they’re not dead, it’s just because I haven’t killed them yet.", "- Nova"],
    ["I'm not shouting! This is my inside voice.", "- Ragnaros"],
    ["So, you ever hear what happens when you play StarCraft backwards? I get my vulture back, I get my girl back, my planet isn’t glassed by the Protoss, and things are peachy keen.", "- Raynor"],
    ["Just to be clear, all the loot we get from this is mine. I need it for... hmm, hunter reasons!", "- Rexxar"],
    ["I keep killing, but no loot comes out. This game makes no sense.", "- Sonya"],
    ["Naked good... Clothes bad.", "- Stitches"],
    ["Take your Warchief's advice: Don't run around doing stupid things just because someone yells 'For the Horde!'", "- Thrall"],
    ["So what’s the deal with this Nexus place? We just fight each other forever?", "- Tychus"],
    ["I’m sorry, did you say something? I was busy thinking about justice.", "- Tyrael"],
    ["Back in my day, there was only one type of paladin, and we were glad to have ‘em.", "- Uther"],
    ["It's not a cheap shot, it's completely balanced. Maybe you just need to learn to fight.", "- Valeera"],
    ["Ugh. Just how many people do I have to kill to get a legendary to drop? Well, I suppose one more won't hurt.", "- Valla"],
    ["You want original or extra crispy?", "- Cpl. Miles 'Blaze' Lewis"],
    ["Need a light?", "- Cpl. Miles 'Blaze' Lewis"],
    ["Barbeque time!", "- Cpl. Miles 'Blaze' Lewis"],
    ["Work harder. Faster. Make better. Stronger. Evolution never over.", "- Abathur"],
    ["Is that a frog in a bubble?", "- Tracer"],
    ["This place is awesome!", "- Tracer"],
    ["The only good mage is a dead mage.", "- Maiev"],
    ["I used to think justice was blind...and then I met Illidan.", "- Maiev"],
    ["Nothing escapes my sight. Not even when I blink.", "- Maiev"],
    ["I will never forgive Cordana for betraying us. But after dealing with Khadgar, I can see why she lost her sanity.", "- Maiev"],
    ["My umbra crescent is a formidable weapon, but my skills are what make me dangerous. A warden's true power comes from beyond the glaive.", "- Maiev"],
    ["I have no idea where my brother Jarod went during his long exile. Am I my brother's keeper? No...I'm Illidan's keeper!", "- Maiev"],
    ["Into the pill box!", "- Cpl. Miles 'Blaze' Lewis"],
    ["I'm always hot...and bothered.", "- Cpl. Miles 'Blaze' Lewis"],
    ["Is it hot here or is it just me?", "- Cpl. Miles 'Blaze' Lewis"],
    ["Anyone got a favorite campfire song? Because I got the campfire! Oh, and smores!", "- Cpl. Miles 'Blaze' Lewis"],
    ["Well I didn't start the fire... Oh wait. Yes I did!", "- Cpl. Miles 'Blaze' Lewis"],
    ["Let us slay this together, as the best of friends!", "- Brightwing"],
    ["You sure are good at murder!", "- Brightwing"],
    ["Let us be friends. You don't want to be my enemy.", "- Brightwing"],
    ["No one likes you and now you are dead.", "- Brightwing"],
    ["You should meet my twin brother Darkwing. He is not very nice.", "- Brightwing"],
    ["Why no fight? Are you scared or dumb? Maybe both!", "- Brightwing"],
    ["You...are fish.", "- Genji"],
    ["Drop your weapon. You have fifteen seconds to comply.", "- Fenix"],
    ["I wish the phase-smiths would clean my tank once in a while. I think I saw a fish in here.", "- Fenix"],
    ["For the last time, I do not have a graviton beam. You are thinking of a different Protoss Phoenix.", "- Fenix"],
    ["So Artanis is a hierarch now? Most impressive. What's a hierarch?", "- Fenix"],
    ["I have returned.", "- Fenix"],
    ["Has anyone seen my dear neice, Leah?", "- Deckard Cain"],
    ["I hope you are better prepared for this than I am.", "- Deckard Cain"],
    ["That was for Tristram!", "- Deckard Cain"],
    ["Maybe now you will learn to respect your elders.", "- Deckard Cain"],
    ["Where is my staff?", "- Deckard Cain"],
    ["You better not be looking for black mushrooms over there.", "- Deckard Cain"],
    ["Stay awhile and listen.", "- Deckard Cain"],
    ["Wisdom can be deadly!", "- Deckard Cain"],
    ["Talent? Hah. That seems generous.", "- Raven Lord"],
    ["That was rather violent.", "- Raven Lord"],
    ["Might I suggest dodging?", "- Raven Lord"],
    ["It's actually quite easy to crash into a planet. My people have done it before.", "- Yrel"],
    ["Oh great, now I'm running late. If I want to rejoin the fight I'll really have to hoof it.", "- Yrel"],
    ["It's just business.", "- Mira Han"],
    ["Double the Mira, double the fun!", "- Mira Han"],
    ["Vital signs negative.", "- Adjutant"],
    ["I've got a short fuse. Deal with it.", "- Junkrat"],
    ["I'm not bad. I'm just rendered that way.", "- Sally Whitemane"],
    ["No one expects the Scarlet Inquisition!", "- Sally Whitemane"],
    ["I'd mana tap that.", "- Kael'thas"],
    ["For the last time. I am not a turtle. I am eternal!", "- Mal'Ganis"],
    ["A word of advice. The ability to incapacitate your enemies is extremely valuable. I wouldn't sleep on it if I were you.", "- Mal'Ganis"],
    ["Have you heard the one about the Nathrazim baker? He was a breadlord!", "- Mal'Ganis"],
    ["I am Mal'Ganis. I do not apologize.", "- Mal'Ganis"],
    ["You really don't want to know what's in the box.", "- Orphea"],
    ["My father would be so mad about this.", "- Orphea"],
    ["What's up. I'm Kevin from the Heroes Dev Team and I am here to announce your game.", "- Kevin Johnson"],
    ["Oooo! That guy didn't read the patch notes.", "- Kevin Johnson"],
    ["Ma ma ma megakill!", "- Kevin Johnson"],
    ["Ha ha ha. I don't know what to say.", "- Kevin Johnson"],
    ["Mercy is a sign of weakness.", "- Imperius"],
    ["So easy, Tyrael could do it.", "- Imperius"],
    ["Demons beware! This archangel is packing heat.", "- Imperius"],
    ["Diplomacy is the art of knowing precisely what to say. Right now, try nothing.", "- Anduin"],
    ["You know I'm king now, right?.", "- Anduin"],
    ["For the Alliance!", "- Anduin"],
    ["I'll try my best, but you should get to a healing fountain soon.", "- Anduin"],
    ["So... you're a zerg now, huh? Sucks to be you.", "- Tychus"],
    ["Boy howdy, you earth folks have issues.", "- Tychus"]
];
// will be used to store previously returned quotes
const quotesReturned = [];
let randomQuote;
let randomSource;

/**
 * selects a random quote object from the quotesArray array
 * @return {object} randomly selected array from quotesArray
 */
function getQuote() {
    // if no objects remain in the quotes array, restores the quotes array to its original state by combining the two arrays
    if (quotesArray.length === 0) {
        quotes.push.apply(quotes, quotesReturned);
    }
    
    while (quotesArray.length > 0) {
        const randomNumber = Math.floor(Math.random() * quotesArray.length);
        const quote = quotesArray[randomNumber];

        // adds the selected quote to the quotesReturned array
        quotesReturned.push(quote);
        // removes the selected quote from the quotes array
        quotesArray.splice(randomNumber, 1);

        return quote;
    }
}

function printQuote() {
    const currentArray = getQuote();
    randomQuote = currentArray[0];
    randomSource = currentArray[1];

    $(".quote").text(`"${randomQuote}"`);
    $(".source").text(randomSource);
}

$('#tweet').on("click", function () {
    window.open(`https://twitter.com/intent/tweet?hashtags=QuotesoftheStorm,BlizzHeroes&text=${randomQuote} ${randomSource}`);
});

$(".button").on("click", printQuote);

printQuote();
