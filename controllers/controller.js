const generateShortId = require('../utils/shortId.js');
const Url = require('../structures/structure.js');

exports.shortenUrl = async (req, res) => {
    try {
	const {longUrl} = req.body;

	if(!longUrl){
		return res.status(400).json({
			error : 'Please provide a url first'
		});
	}

	let shortId;
	let isUnique = false;


	while(!isUnique){
		shortId = generateShortId();

		const existingUrl = await Url.findOne({shortId : shortId});

		if(!existingUrl){
			isUnique = true;
		}
	}
	const newUrl = await Url.create({
		longUrl : longUrl,
		shortId : shortId
	});

	res.status(201).json({
		message : 'Url shorten successfully',
		shortId : newUrl.shortId
	});

     }
	catch (err){
		console.error(err);
		res.status(500).json({
			error : 'Server error'
		});
	}

}

exports.redirectUrl = async (req,res) => {
try{
	const {shortId} = req.params;
	const urlMap = await Url.findOne({shortId : shortId});
	if(!urlMap){
		res.status(404).json({
			error : 'Short url not found'
		})
	}
	urlMap.clicks++;
	await urlMap.save();
	
	return res.redirect(urlMap.longUrl);
} catch(err){
		console.error(err);
		res.status(500).json({error: 'Server error while redirecting'});
	}
}
