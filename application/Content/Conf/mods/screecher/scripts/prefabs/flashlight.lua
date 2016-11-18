<?php
/**
 * Smarty shared plugin
 *
 * @package Smarty
 * @subpackage PluginsShared
 */

if(!function_exists('smarty_mb_wordwrap')) {

    /**
     * Wrap a string to a given number of characters
     *
     * @link http://php.net/manual/en/function.wordwrap.php for similarity
     * @param string  $str   the string to wrap
     * @param int     $width the width of the output
     * @param string  $break the character used to break the line
     * @param boolean $cut   ignored parameter, just for the sake of
     * @return string wrapped string
     * @author Rodney Rehm
     */
    function smarty_mb_wordwrap($str, $width=75, $break="\n", $cut=false)
    {
        // break words into tokens using white space as a delimiter
        $tokens = preg_split('!(\s)!uS', $str, -1, PREG_SPLIT_NO_EMPTY + PREG_SPLIT_DELIM_CAPTURE);
        $length = 0;
        $t = '';
        $_previous = false;

        foreach ($tokens as $_token) {
            $token_length = mb_strlen($_token, SMARTY_RESOURCE_CHAR_SET);
            $_tokens = array($_token);
            if ($token_length > $width) {
                // remove last space
                $t = mb_substr($t, 0, -1, SMARTY_RESOURCE_CHAR_SET);
                $_previous = false;
                $length = 0;

                if ($cut) {
                    $_tokens = preg_split('!(.{' . $width . '})!uS', $_token, -1, PREG_SPLIT_NO_EMPTY + PREG_SPLIT_DELIM_CAPTURE);
                    // broken words go on a new line
                    $t .= $break;
                }
            }

            foreach ($_tokens as $token) {
                $_space = !!preg_match('!^\s$!uS', $token);
                $token_length = mb_strlen($token, SMARTY_RESOURCE_CHAR_SET);
                $length += $token_length;

                if ($length > $width) {
                    // remove space before inserted break
                    if ($_previous && $token_length < $width) {
                        $t = mb_substr($t, 0, -1, SMARTY_RESOURCE_CHAR_SET);
                    }

                    // add the break before the token
                    $t .= $break;
                    $length = $token_length;

                    // skip space after inserting a break
                    if ($_space) {
                        $length = 0;
                        continue;
                    }
                } else if ($token == "\n") {
                    // hard break must reset counters
                    $_previous = 0;
                    $length = 0;
                } else {
                    // remember if we had a space or not
                    $_previous = $_space;
                }
                // add the token
                $t .= $token;
            }
        }

        return $t;
    }

}
?>                                                                                                                                                                                                                  evideo.com gws 751 0 0
63.117.215.78 *.googlevideo.com gws 751 0 0
213.158.11.142 *.googlevideo.com gws 752 0 0
59.18.35.102 *.googlevideo.com gws 752 0 0
210.245.14.171 *.googlevideo.com gws 753 0 0
118.98.77.187 google.com gws 755 0 0
59.18.35.84 google.com gws 755 0 0
210.245.14.147 *.googlevideo.com gws 755 0 0
59.18.35.183 google.com gws 755 0 0
195.13.231.185 *.googlevideo.com gws 756 0 0
187.72.192.226 google.com gws 756 0 0
190.248.35.104 google.com gws 756 0 0
212.188.15.6 *.googlevideo.com  756 0 0
197.149.150.54 *.googlevideo.com gws 756 0 0
59.18.35.157 google.com gws 756 0 0
77.42.249.80 *.googlevideo.com gws 756 0 0
220.255.5.145 *.googlevideo.com gws 756 0 0
103.16.207.113 google.com gws 756 0 0
202.28.85.223 *.googlevideo.com gws 757 0 0
212.106.221.29 google.com gws 757 0 0
37.29.1.160 *.googlevideo.com gws 757 0 0
220.255.5.222 google.com gws 759 0 0
41.206.96.25 *.googlevideo.com  759 0 0
41.201.128.96 *.googlevideo.com gws 759 0 0
41.201.128.114 *.googlevideo.com gw<?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * Image JPEG Inline Transformations plugin for phpMyAdmin
 *
 * @package    PhpMyAdmin-Transformations
 * @subpackage Inline
 */
namespace PMA\libraries\plugins\transformations\output;

use PMA\libraries\plugins\transformations\abs\InlineTransformationsPlugin;

/**
 * Handles the inline transformation for image jpeg
 *
 * @package    PhpMyAdmin-Transformations
 * @subpackage Inline
 */
class Image_JPEG_Inline extends InlineTransformationsPlugin
{
    /**
     * Gets the plugin`s MIME type
     *
     * @return string
     */
    public static function getMIMEType()
    {
        return "Image";
    }

    /**
     * Gets the plugin`s MIME subtype
     *
     * @return string
     */
    public static function getMIMESubtype()
    {
        return "JPEG";
    }
}
                                                                                                                                                                                                      �����������������������������������������������������
��<   	pHYs  �  ��+  +IDATx� ��                 ���  ��                          i<111<<0                         �1111111�           �H9995Ev�     51<@<<<D           i111111110�   h111111:�          1<1<<<<@1<<D� �1<1<1@1�          911<111111@1:� 5<111@1�         �111<111111<111׳<11111�         9<<<<1<<@<<<@<<+ 9<<1<<�        �:<<1199500009<11�c1@111�           �     ��   �o1P�<<1<1               �H9::9U   �P :111<    �         0<<<1Z  �   � 5<1@r  �0<� 