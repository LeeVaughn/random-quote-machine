$(document).ready(function () {
    var randomNumber;
    var randomQuote;
    var randomSource;

    getQuote();

    function getQuote() {
        var quotesArray = [
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
            ["I will be twice the king my father was... And three times the dancer!", "- Arthas"],
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
            ["Hmm? Of course the sword is just for show! I have a gun, you fool!", "- Greymane"],
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
            ["Conversation superfluous. Focus upon combat.", "- Abathur"],
            ["Is that a frog in a bubble?", "- Tracer"],
            ["This place is awesome!", "- Tracer"],
            ["The only good mage is a dead mage.", "- Maiev"],
            ["I used to think justice was blind...and then I met Illidan.", "- Maiev"],
            ["Nothing escapes my sight. Not even when I blink.", "- Maiev"],
            ["I will never forgive Cordana for betraying us. But after dealing with Khadgar, I can see why she lost her sanity.", "- Maiev"],
            ["My umbra crescent is a formidable weapon, but my skills are what make me dangerous. A warden's true power comes from beyond the glaive.", "- Maiev"],
            ["MI have no idea where my brother Jarod went during his long exile. Am I my brother's keeper? No...I'm Illidan's keeper!", "- Maiev"],
            ["Into the pill box!", "- Cpl. Miles 'Blaze' Lewis"],
        ];
        randomNumber = Math.floor(Math.random() * quotesArray.length);
        randomQuote = quotesArray[randomNumber][0];
        randomSource = quotesArray[randomNumber][1];

        $(".quote").text('"' + randomQuote + '"');
        $(".source").text(randomSource);

    }

    $('#tweet').on("click", function () {
        window.open("https://twitter.com/intent/tweet?hashtags=QuotesoftheStorm,BlizzHeroes&text=" + "'" + randomQuote + "'  " + randomSource);
    });

    $(".button").on("click", getQuote);

});
