a> <em> <a href="shops_products.php" title="购买的商品"><?php echo $minfos['shop']; ?></a> </em> </p>
          </div>
        </dd>
      </dl>
      <div class="share">
        <div class="share01"> </div>
        <div class="share02">
          <form target="hidden_frame" method="post" enctype="multipart/form-data" name="msgmood" action="#">
            <input id="share_textarea" type="text" value="来,说点啥吧..." onclick="showFace()"/>
            <button id="btn_submit" type="button" onclick="msgSubmit(this.form)">发表</button>
          </form>
        </div>
      </div>
      <div id="sns-feeds">
          <div class="indexTab">
            <ul>
              <li id="arcticle"><a href="javascript:void(0)">最新文档</a></li>
              <li class="thisTab" id="myfeed"><a href="javascript:void(0)">我的动态</a></li>
              <li id="allfeed"><a href="javascript:void(0)">全站动态</a></li>
            </ul>
          </div>
        <div class="sns-box" id="FeedText"></div>
      </div>
    </div>
    <div class="col-extra">
      <div class="sns-box">
        <div class="hd">
          <h3>信息统计</h3>
        </div>
        <div class="sns-avatar-m">
          <dl class="statistics">
            <dt>空间访问量：</dt>
            <dd><?php echo $minfos['homecount']; ?></dd>
            <dt>文档总点击：</dt>
            <dd><?php echo $minfos['pagecount']; ?></dd>
            <dt>好友数量：</dt>
            <dd><?php echo $minfos['friend']; ?></dd>
            <dt>空间版本：</dt>
            <dd><?php
       			if($cfg_mb_lit=='Y') echo '精简版';
        		else echo '完全版';
        	?></dd>
            <dt>上传限制：</dt>
            <dd><?php echo $cfg_mb_upload_size; ?> KB</dd>
            <dt>空间大小：</dt>
            <dd><?php echo $minfos['totaluse']."/".$cfg_mb_max; ?> MB</dd>
          </dl>
        </div>
      </div>
      <div class="sns-box">
        <div class="hd">
          <h3>欢迎新朋友</h3>
        </div>
        <div class="sns-avatar-m">
          <ul>
            <?php
				foreach ($newfriends as $newfriend)
				{
			 ?>
            <li class="pic"><a target="_blank" href="<?php echo $cfg_cmsurl;?>/member/index.php?uid=<?php echo $newfriend['userid'];?>">
            <?php
            if(!$newfriend['face']==""){
             echo "<img src=".$newfriend['face']." width='48' height='48' />";
            }else{
             if($newfriend['sex']=='女') echo "<img src='templets/images/dfgirl.png' width='48' height='48' />";
             else echo "<img src='templets/images/dfboy.png' width='48' height='48' />";
            }
            ?>
            </a><span class="name"><a target="_blank" href="<?php echo $cfg_cmsurl;?>/member/index.php?uid=<?php echo $newfriend['userid'];?>"><?php echo $newfriend['uname'];?></a></span></li>
             <?php
                }
              ?>
          </ul>
        </div>
      </div>
      <div class="clr"></div>
      <div class="sns-box">
        <div class="hd">
          <h3>我的好友</h3>
        </div>
        <div class="sns-avatar-m">
          <ul>
             <?php
				foreach ($friends as $friend)
				{
			 ?>
            <li class="pic"><a target="_blank" href="<?php echo $cfg_cmsurl;?>/member/index.php?uid=<?php echo $friend['floginid'];?>">
            <?php
            if(!$friend['face']==""){
             echo "<img src=".$friend['face']." width='48' height='48' />";
            }else{
             if($friend['sex']=='女') echo "<img src='templets/images/dfgirl.png' width='48' height='48' />";
             else echo "<img src='templets/images/dfboy.png' width='48' height='48' />";
            }
            ?>
            </a><span class="name"><a target="_blank" href="<?php echo $cfg_cmsurl;?>/member/index.php?uid=<?php echo $friend['floginid'];?>"><?php echo $friend['funame'];?></a></span></li>
             <?php
                }
              ?>
          </ul>
        </div>
      </div>
      <div class="sns-box">
        <div class="bd ">
          <form action="search.php">
            <p style="margin-bottom:9px">搜索用户</p>
            <input class="text1" type="text" value="" name="keyword"/>
            <button class="button1" type="submit">找人</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<?php include(DEDEMEMBER."/templets/foot.htm"); ?>
</div>
</body>
</html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  """Implementation of JSONDecoder
"""
import re
import sys
import struct

from json.scanner import make_scanner
try:
    from _json import scanstring as c_scanstring
except ImportError:
    c_scanstring = None

__all__ = ['JSONDecoder']

FLAGS = re.VERBOSE | re.MULTILINE | re.DOTALL

def _floatconstants():
    _BYTES = '7FF80000000000007FF0000000000000'.decode('hex')
    if sys.byteorder != 'big':
        _BYTES = _BYTES[:8][::-1] + _BYTES[8:][::-1]
    nan, inf = struct.unpack('dd', _BYTES)
    return nan, inf, -inf

NaN, PosInf, NegInf = _floatconstants()


def linecol(doc, pos):
    lineno = doc.count('\n', 0, pos) + 1
    if lineno == 1:
        colno = pos
    else:
        colno = pos - doc.rindex('\n', 0, pos)
    return lineno, colno


def errmsg(msg, doc, pos, end=None):
    # Note that this function is called from _json
    lineno, colno = linecol(doc, pos)
    if end is None:
        fmt = '{0}: line {1} column {2} (char {3})'
        return fmt.format(msg, lineno, colno, pos)
        #fmt = '%s: line %d column %d (char %d)'
        #return fmt % (msg, lineno, colno, pos)
    endlineno, endcolno = linecol(doc, end)
    fmt = '{0}: line {1} column {2} - line {3} column {4} (char {5} - {6})'
    return fmt.format(msg, lineno, colno, endlineno, endcolno, pos, end)
    #fmt = '%s: line %d column %d - line %d column %d (char %d - %d)'
    #return fmt % (msg, lineno, colno, endlineno, endcolno, pos, end)


_CONSTANTS = {
    '-Infinity': NegInf,
    'Infinity': PosInf,
    'NaN': NaN,
}

STRINGCHUNK = re.compile(r'(.*?)(["\\\x00-\x1f])', FLAGS)
BACKSLASH = {
    '"': u'"', '\\': u'\\', '/': u'/',
    'b': u'\b', 'f': u'\f', 'n': u'\n', 'r': u'\r', 't': u'\t',
}

DEFAULT_ENCODING = "utf-8"

def py_scanstring(s, end, encoding=None, strict=True,
        _b=BACKSLASH, _m=STRINGCHUNK.match):
    """Scan the string s for a JSON string. End is the index of the
    character in s after the quote that started the JSON string.
    Unescapes all valid JSON string escape sequences and raises ValueError
    on attempt to decode an invalid string. If strict is False then literal
    control characters are allowed in the string.

    Returns a tuple of the decoded string and the index of the character in s
    after the end quote."""
    if encoding is None:
        encoding = DEFAULT_ENCODING
    chunks = []
    _append = chunks.append
    begin = end - 1
    while 1:
        chunk = _m(s, end)
        if chunk is None:
            raise ValueError(
                errmsg("Unterminated string starting at", s, begin))
        end = chunk.end()
        content, terminator = chunk.groups()
        # Content is contains zero or more unescaped string characters
        if content:
            if not isinstance(content, unicode):
                content = unicode(content, encoding)
            _append(content)
        # Terminator is the end of string, a literal control character,
        # or a backslash denoting that an escape sequence follows
        if terminator == '"':
            break
        elif terminator != '\\':
            if strict:
                #msg = "Invalid control character %r at" % (terminator,)
                msg = "Invalid control character {0!r} at".format(terminator)
                raise ValueError(errmsg(msg, s, end))
            else:
                _append(terminator)
                continue
        try:
            esc = s[end]
        except IndexError:
            raise ValueError(
                errmsg("Unterminated string starting at", s, begin))
        # If not a unicode escape sequence, must be in the lookup table
        if esc != 'u':
            try:
                char = _b[esc]
            except KeyError:
                msg = "Invalid \\escape: " + repr(esc)
                raise ValueError(errmsg(msg, s, end))
            end += 1
        else:
            # Unicode escape sequence
            esc = s[end + 1:end + 5]
            next_end = end + 5
            if len(esc) != 4:
                msg = "Invalid \\uXXXX escape"
                raise ValueError(errmsg(msg, s, end))
            uni = int(esc, 16)
            # Check for surrogate pair on UCS-4 systems
            if 0xd800 <= uni <= 0xdbff and sys.maxunicode > 65535:
                msg = "Invalid \\uXXXX\\uXXXX surrogate pair"
                if not s[end + 5:end + 7] == '\\u':
                    raise ValueError(errmsg(msg, s, end))
                esc2 = s[end + 7:end + 11]
                if len(esc2) != 4:
                    raise ValueError(errmsg(msg, s, end))
                uni2 = int(esc2, 16)
                uni = 0x10000 + (((uni - 0xd800) << 10) | (uni2 - 0xdc00))
                next_end += 6
            char = unichr(uni)
            end = next_end
        # Append the unescaped character
        _append(char)
    return u''.join(chunks), end


# Use speedup if available
scanstring = c_scanstring or py_scanstring

WHITESPACE = re.compile(r'[ \t\n\r]*', FLAGS)
WHITESPACE_STR = ' \t\n\r'

def JSONObject(s_and_end, encoding, strict, scan_once, object_hook,
               object_pairs_hook, _w=WHITESPACE.match, _ws=WHITESPACE_STR):
    s, end = s_and_end
    pairs = []
    pairs_append = pairs.append
    # Use a slice to prevent IndexError from being raised, the following
    # check will raise a more specific ValueError if the string is empty
    nextchar = s[end:end + 1]
    # Normally we expect nextchar == '"'
    if nextchar != '"':
        if nextchar in _ws:
            end = _w(s, end).end()
            nextchar = s[end:end + 1]
        # Trivial empty object
        if nextchar == '}':
            return pairs, end + 1
        elif nextchar != '"':
            raise ValueError(errmsg("Expecting property name", s, end))
    end += 1
    while True:
        key, end = scanstring(s, end, encoding, strict)

        # To skip some function call overhead we optimize the fast paths where
        # the JSON key separator is ": " or just ":".
        if s[end:end + 1] != ':':
            end = _w(s, end).end()
            if s[end:end + 1] != ':':
                raise ValueError(errmsg("Expecting : delimiter", s, end))

        end += 1

        try:
            if s[end] in _ws:
                end += 1
                if s[end] in _ws:
                    end = _w(s, end + 1).end()
        except IndexError:
            pass

        try:
            value, end = scan_once(s, end)
        except StopIteration:
            raise ValueError(errmsg("Expecting object", s, end))
        pairs_append((key, value))

        try:
            nextchar = s[end]
            if nextchar in _ws:
                end = _w(s, end + 1).end()
                nextchar = s[end]
        except IndexError:
            nextchar = ''
        end += 1

        if nextchar == '}':