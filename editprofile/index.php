<!doctype html>
<html>
<head>
    <!-- Title -->
    <title>Edit Profile - SpeedRunsLive</title>
    
    <!-- Meta -->
    <meta name="description" content="Edit your profile." />
    <meta name="keywords" content="edit, profile" />

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
    
    <script type="text/javascript" src="editprofile.js"></script>
    
    <form>
    <h1>Edit your profile</h1>
    <div id="editprofile">
            <div class="formitem">
                <div class="formtext">SRL Name (capitalization changes only)</div>
                <img src="http://cdn.speedrunslive.com/images/srl_icon20px.png" /><input type="text" id="editsrlname" placeholder="username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'username'" />
            </div>
            <div class="formitem">
                <input type="radio" class="apiselectt" name="api" value="twitch" checked> Twitch
                <input type="radio" class="apiselecthb" name="api" value="hitbox"> Hitbox
                <span class="twitchspan"><div class="formtext">Twitch</div>
                <img src="http://cdn.speedrunslive.com/images/ttv_icon20px.png" /><input type="text" id="edittwitch" placeholder="username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'username'" /><br />
                <input type="checkbox" class="importtwitch"> Import my following
                <input type="checkbox" class="importpintwitch"> ...and pin them</span>
                <span class="hitboxspan"><div class="formtext">Hitbox</div>
                <img src="http://cdn.speedrunslive.com/images/hb_icon20px.png" /><input type="text" id="edithitbox" placeholder="username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'username'" /></span>
            </div>
            
            <div class="formitem">
                <div class="formtext">Twitter</div>
                <img src="http://cdn.speedrunslive.com/images/twitter_icon20px.png" /><input type="text" id="edittwitter" placeholder="username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'username'" />
            </div>
            
            <div class="formitem">
                <div class="formtext">YouTube</div>
                <img src="http://cdn.speedrunslive.com/images/youtube_icon20px.png" /><input type="text" id="edityoutube" placeholder="username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'username'" />
            </div>
            
            <div class="formitem">
                <div class="formtext">Country (Flag icon)</div>
                <select id="countrylist"></select>
            </div>

            <div class="formitem">
                <div class="formtext">Front page preference</div>
                <input type="radio" class="frontpageselect" id="select0" name="frontpage" value="0"> Display me on the front page<br />
                <input type="radio" class="frontpageselect" id="select1" name="frontpage" value="1"> Do not display me on the front page<br />
                <input type="radio" class="frontpageselect" id="select2" name="frontpage" value="2" checked> Auto-detect <a class="autodetecthelp" title="With this option selected, your stream will only show on the front page if your Twitch title contains one of the following terms:
<span class='keywords'>1xx%, any%, low%, attempt(s), derust(ing), de-rust(ing), IL(s), individual level(s), learning, planning, practice, practicing, race(s), routing, rta(s), run(s), speedrun(s), TAS(ing), [srl]</span>
 
Your stream will automatically be hidden, overruling the above, if it contains one of the following terms:
<span class='keywords'>blind, casual, design(ing), let's play(s), lets play(s), [nosrl]</span>

Your stream will always be shown while racing, regardless of your Twitch title.">?</a><br />
                <input type="radio" class="frontpageselect" id="select3" name="frontpage" value="3"> Show me only when I'm racing on SRL<br />
                <span class="frontpageselectwarning"></span>
                <div class="streamwarning">Reminder: Per the FAQ, you may only stream <a href="/faq/#whatcanistream">speedrun-related content</a> on the front page. If you stream non-speedrun content on the front page, you may be temporarily removed and warned. If repeated, you may be blacklisted.  For more information, please refer to the <a href="/faq/#whatcanistream">FAQ</a>.</div>
            </div>
            <button type="button" id="submit" class="smallbutton" onclick="submitChange()">Submit</button>
    </div>
    
    <div id="editprofile">
    <div class="formtext">Pinned Streams</div>
            <div class="formitem streams streamsform">
                <!--<textarea id="editpinnedstreams"></textarea>-->
                <select id="editpinnedstreams" size="10"></select><br />
                <div class="autocompleteWrapper">
                    <input type="text" class="autocompleteStreams" id="autocompletePinned">
                    <input type="text" class="stream">
                </div><br />
                <button class="add" type="button">Add</button><button class="remove" type="button">Remove</button>
            </div>

            <div class="formitem streams streamsform">
                <div class="formtext">Hidden Streams</div>
                <!--<textarea id="edithiddenstreams"></textarea>-->
                <select id="edithiddenstreams" size="9"></select><br />
                <div class="autocompleteWrapper">
                    <input type="text" class="autocompleteStreams" id="autocompleteHidden">
                    <input type="text" class="stream">
                </div><br />
                <button class="add" type="button">Add</button><button class="remove" type="button">Remove</button>
            </div>

    </div>
    <div id="editprofile">
            <div class="formitem streams gamesform">
                <div class="formtext">Pinned Games</div>
                <!--<textarea id="editpinnedgames"></textarea>-->
                <select id="editpinnedgames" size="10"></select><br />
                <input type="text" class="stream"><br />
                <button class="add" type="button">Add</button><button class="remove" type="button">Remove</button>
            </div>

            <div class="formitem streams gamesform">
                <div class="formtext">Hidden Games</div>
                <!--<textarea id="edithiddengames"></textarea>-->
                <select id="edithiddengames" size="9"></select><br />
                <input type="text" class="stream"><br />
                <button class="add" type="button">Add</button><button class="remove" type="button">Remove</button>
            </div>

            <div class="formitem">
                <div class="streamwarning">When adding games, please make sure they match the <a href="http://twitch.tv/directory/">Twitch Directory</a>.</div>
            </div>

    </div>
    </form>
    
     
    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
