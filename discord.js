const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

client.once('ready', ()=> {
  console.log('ready');
})

var fetch = require('node-fetch');

//crypto data bot

client.on('message', message => {
  if(message.content === '!doge'){
    fetch('https://x.wazirx.com/wazirx-falcon/api/v2.0/crypto_rates', {
      headers: {
	'authority': 'x.wazirx.com',
	'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
	'api-key': 'WRXPRODWn5Kc36$#%WYjguL;1oUYnD9ijiIHE7bk3r78%3#mFHJdik3n1Uafgib98*GI',
	'sec-ch-ua-mobile': '?0',
	'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
	'accept': '*/*',
	'origin': 'https://wazirx.com',
	'sec-fetch-site': 'same-site',
	'sec-fetch-mode': 'cors',
	'sec-fetch-dest': 'empty',
	'referer': 'https://wazirx.com/',
	'accept-language': 'en-US,en;q=0.9,bn;q=0.8'
      }
    })
      .then(res => res.json())
      .then(data => {
	message.channel.send(data.doge.inr+'rs')
      })
      .catch(err => console.log(err))

  }
  if(message.content === '!btc'){
    fetch('https://x.wazirx.com/wazirx-falcon/api/v2.0/crypto_rates', {
      headers: {
	'authority': 'x.wazirx.com',
	'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
	'api-key': 'WRXPRODWn5Kc36$#%WYjguL;1oUYnD9ijiIHE7bk3r78%3#mFHJdik3n1Uafgib98*GI',
	'sec-ch-ua-mobile': '?0',
	'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
	'accept': '*/*',
	'origin': 'https://wazirx.com',
	'sec-fetch-site': 'same-site',
	'sec-fetch-mode': 'cors',
	'sec-fetch-dest': 'empty',
	'referer': 'https://wazirx.com/',
	'accept-language': 'en-US,en;q=0.9,bn;q=0.8'
      }
    })
      .then(res => res.json())
      .then(data => {
	message.channel.send(data.btc.inr+'rs')
      })
      .catch(err => console.log(err))

  }
})



//elon tweet bot
client.on('message', message => {

  if(message.content === '!goodbot'){
    message.channel.send('thanks')
  }

  if(message.content === '!tweet'){
    fetch('https://twitter.com/i/api/graphql/Kq7XqqyDGn4Ly7Yh0AhK9w/UserTweetsAndReplies?variables=%7B%22userId%22%3A%2244196397%22%2C%22count%22%3A20%2C%22withHighlightedLabel%22%3Atrue%2C%22withTweetQuoteCount%22%3Atrue%2C%22includePromotedContent%22%3Atrue%2C%22withTweetResult%22%3Afalse%2C%22withReactions%22%3Afalse%2C%22withUserResults%22%3Afalse%2C%22withVoice%22%3Afalse%2C%22withNonLegacyCard%22%3Atrue%2C%22withBirdwatchPivots%22%3Afalse%7D', {
      headers: {
	'authority': 'twitter.com',
	'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
	'x-twitter-client-language': 'en',
	'x-csrf-token': '2a6846b7125c15833e228404045e0a2480cccd9c43cf5debde60d2e54092286e0ced8ad59728329889a5aa894af91edaa709dd229b7e7767bbe7ca9e48a20829229de1b1682b1aaef13f53a688b9a2b9',
	'sec-ch-ua-mobile': '?0',
	'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
	'content-type': 'application/json',
	'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
	'x-twitter-auth-type': 'OAuth2Session',
	'x-twitter-active-user': 'yes',
	'accept': '*/*',
	'sec-fetch-site': 'same-origin',
	'sec-fetch-mode': 'cors',
	'sec-fetch-dest': 'empty',
	'referer': 'https://twitter.com/elonmusk/with_replies',
	'accept-language': 'en-US,en;q=0.9,bn;q=0.8',
	'cookie': 'personalization_id="v1_Hb8yD0hXzcMmFlaPlactqA=="; guest_id=v1%3A162109711413953524; _ga=GA1.2.1425364080.1621097121; _gid=GA1.2.30485191.1621717561; ads_prefs="HBERAAA="; kdt=AjuBGQktiabaB7BUtReEyQ30HAuxKmhsKos9GmUc; remember_checked_on=1; auth_token=f7f33c358b9fb51f8dbea6fbc838610062e15de2; twid=u%3D1273857857985757184; ct0=2a6846b7125c15833e228404045e0a2480cccd9c43cf5debde60d2e54092286e0ced8ad59728329889a5aa894af91edaa709dd229b7e7767bbe7ca9e48a20829229de1b1682b1aaef13f53a688b9a2b9; mbox=session#5a0bfade11134cba873b10bdcaa09ad3#1621719542|PC#5a0bfade11134cba873b10bdcaa09ad3.31_0#1684963181; external_referer=padhuUp37zjSzNXpb3CVCQ%3D%3D|0|8e8t2xd8A2w%3D; lang=en'
      }
    })
      .then(res => res.json())
      .then(res => {

	const data = res.data
	const i = 0;

	const test = data.user.result.timeline.timeline.instructions[0].entries[i].entryId;

	if(test.startsWith('homeConversation')){
	  const conversation = res.data.user.result.timeline.timeline.instructions[0].entries[i].content.items[0].item.itemContent.tweet.legacy.full_text;
	  message.channel.send('hey' + conversation)
	}

	if(test.startsWith('tweet')){
	  const tweet = res.data.user.result.timeline.timeline.instructions[0].entries[i].content.itemContent.tweet.legacy.full_text;
	  message.channel.send('hi'+tweet)
	}

      })


  }
})

client.login(token)

