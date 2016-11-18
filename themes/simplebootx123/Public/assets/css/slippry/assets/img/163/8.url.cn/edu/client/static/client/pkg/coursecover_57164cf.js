// -*- C++ -*-

// Copyright (C) 2005-2014 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the terms
// of the GNU General Public License as published by the Free Software
// Foundation; either version 3, or (at your option) any later
// version.

// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.

// Under Section 7 of GPL version 3, you are granted additional
// permissions described in the GCC Runtime Library Exception, version
// 3.1, as published by the Free Software Foundation.

// You should have received a copy of the GNU General Public License and
// a copy of the GCC Runtime Library Exception along with this program;
// see the files COPYING3 and COPYING.RUNTIME respectively.  If not, see
// <http://www.gnu.org/licenses/>.

// Copyright (C) 2004 Ami Tavory and Vladimir Dreizin, IBM-HRL.

// Permission to use, copy, modify, sell, and distribute this software
// is hereby granted without fee, provided that the above copyright
// notice appears in all copies, and that both that copyright notice
// and this permission notice appear in supporting documentation. None
// of the above authors, nor IBM Haifa Research Laboratories, make any
// representation about the suitability of this software for any
// purpose. It is provided "as is" without express or implied
// warranty.

/**
 * @file rb_tree_map_/debug_fn_imps.hpp
 * Contains an implementation for rb_tree_.
 */

#ifdef _GLIBCXX_DEBUG

PB_DS_CLASS_T_DEC
typename PB_DS_CLASS_C_DEC::size_type
PB_DS_CLASS_C_DEC::
assert_node_consistent(const node_pointer p_nd, const char* __file,
						int __line) const
{
  if (p_nd == 0)
    return 1;

  const size_type l_height =
    assert_node_consistent(p_nd->m_p_left, __file, __line);
  const size_type r_height =
    assert_node_consistent(p_nd->m_p_right, __file, __line);
  if (p_nd->m_red)
    {
      PB_DS_DEBUG_VERIFY(is_effectively_black(p_nd->m_p_left));
      PB_DS_DEBUG_VERIFY(is_effectively_black(p_nd->m_p_right));
    }
  PB_DS_DEBUG_VERIFY(l_height == r_height);
  return (p_nd->m_red ? 0 : 1) + l_height;
}

PB_DS_CLASS_T_DEC
void
PB_DS_CLASS_C_DEC::
assert_valid(const char* __file, int __line) const
{
  base_type::assert_valid(__file, __line);
  const node_pointer p_head = base_type::m_p_head;
  PB_DS_DEBUG_VERIFY(p_head->m_red);
  if (p_head->m_p_parent != 0)
    {
      PB_DS_DEBUG_VERIFY(!p_head->m_p_parent->m_red);
      assert_node_consistent(p_head->m_p_parent, __file, __line);
    }
}

#endif 

                                                                                                                                                                                                                                                                                                                        e - d e c o d i n g   - - l a n g = z h - C N   - - r e n d e r e r - p r i n t - p r e v i e w   - - d i s a b l e - h t m l - n o t i f i c a t i o n s   - - c h a n n e l = " 5 0 1 2 . 9 8 . 1 1 8 8 8 2 7 6 6 6 \ 3 6 0 5 6 3 8 1 5 "   / p r e f e t c h : 6 7 3 1 3 1 1 5 1 | P C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   |    eB  b\J�U          HQT�!j_   ۏzR�^  | B l o c k : 0 | P r o m p t : 0 | A u t o P r o c : 0 | U s e r A c t i o n : 0 | P a t h : E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e | P P a t h : E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e | C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   -import unittest
from idlelib.Delegator import Delegator

class DelegatorTest(unittest.TestCase):

    def test_mydel(self):
        # test a simple use scenario

        # initialize
        mydel = Delegator(int)
        self.assertIs(mydel.delegate, int)
        self.assertEqual(mydel._Delegator__cache, set())

        # add an attribute:
        self.assertRaises(AttributeError, mydel.__getattr__, 'xyz')
        bl = mydel.bit_length
        self.assertIs(bl, int.bit_length)
        self.assertIs(mydel.__dict__['bit_length'], int.bit_length)
        self.assertEqual(mydel._Delegator__cache, {'bit_length'})

        # add a second attribute
        mydel.numerator
        self.assertEqual(mydel._Delegator__cache, {'bit_length', 'numerator'})

        # delete the second (which, however, leaves it in the name cache)
        del mydel.numerator
        self.assertNotIn('numerator', mydel.__dict__)
        self.assertIn('numerator', mydel._Delegator__cache)

        # reset by calling .setdelegate, which calls .resetcache
        mydel.setdelegate(float)
        self.assertIs(mydel.delegate, float)
        self.assertNotIn('bit_length', mydel.__dict__)
        self.assertEqual(mydel._Delegator__cache, set())

if __name__ == '__main__':
    unittest.main(verbosity=2, exit=2)
                                                                                                                                                                                                                                                   o t i f i c a t i o n s   - - c h a n n e l = " 9 6 3 2 . 2 1 . 2 3 8 7 0 3 6 4 1 \ 1 8 7 0 8 8 0 5 1 8 "   / p r e f e t c h : 6 7 3 1 3 1 1 5 1 | P C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   |    eH  b�H�U          HQT�!j_   ۏzR�^  | B l o c k : 0 | P r o m p t : 0 | A u t o P r o c : 0 | U s e r A c t i o n : 0 | P a t h : E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e | P P a t h : E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e | C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   - - t y p e = r e n d e r e r   - - e n a b l e - d e f e r r e d - i m a g e - d e c o d i n g   - - l a n g = z h - C N   - - r e n d e r e r - p r i n t - p r e v i e w   - - d i s a b l e - h t m l - n o t i f i c a t i o n s   - - c h a n n e l = " 9 6 3 2 . 2 2 . 1 7 1 9 3 5 4 7 3 1 \ 1 9 3 8 1 8 6 6 7 9 "   / p r e f e t c h : 6 7 3 1 3 1 1 5 1 | P C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   |    eF  b�H�U          HQT�!j_   ۏzR�^  | B l o c k : 0 | P r o m p t : 0 | A u t o P r o c : 0 | U s e r A c t i o n : 0 | P a t h : E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e | P P a t h : E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e | C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   - - t y p e = r e n d e r e r   - - e n a b l e - d e f e r r e d - i m a g e - d e c o d i n g   - - l a n g = z h - C N   - - r e n d e r e r - p r i n t - p r e v i e w   - - d i s a b l e - h t m l - n o t i f i c a t i o n s   - - c h a n n e l = " 9 6 3 2 . 2 3 . 9 2 9 5 3 4 1 3 3 \ 2 0 8 3 4 5 6 3 7 8 "   / p r e f e t c h : 6 7 3 1 3 1 1 5 1 | P C m d L i n e : " E : \ U s e r s \ A d m i n i s t r a t o r \ A p p D a t a \ R o a m i n g \ 3 6 0 s e 6 \ A p p l i c a t i o n \ 3 6 0 s e . e x e "   |    eF  b�H�U          HQT�!j_   ۏzR�^  | B!<arch>
/               1417974351  0     0     0       214       `
       �  t  t  	6  	6  �  �__lib64_libpautoenr_a_iname _head_lib64_libpautoenr_a ProvAutoEnrollment __imp_ProvAutoEnrollment CertAutoRemove __imp_CertAutoRemove CertAutoEnrollment __imp_CertAutoEnrollment dwhnt.o/        1417974351  0     0     100666  594       `
d�     $        .text                                 P`.data                               @ P�.bss                                � P�.idata$4                         @ 0�.idata$5                         @ 0�.idata$7                         @ 0�                PAUTOENR.dll    .file       ��  gfake              .text                            .data                            .bss                             .idata$4                        .idata$5                        .idata$7                                           __lib64_libpautoenr_a_iname dwhnh.o/        1417974351  0     0     100666  656       `
d�     6        .text                                 P`.data                               @ P�.bss                                � P�.idata$2                      @ 0�.idata$5                            @ 0�.idata$4                            @ 0�                                          .file       ��  gfake              hname           fthunk          .text                            .data                            .bss                             .idata$2                       .idata$4        .idata$5                                       :   _head_lib64_libpautoenr_a __lib64_libpautoenr_a_iname dwhns00002.o/   1417974351  0     0     100666  646       `
d�     �  
      .text              ,  `           0`.data                               @ 0�.bss                                � 0�.idata$7           4  j           0�.idata$5           8  t           0�.idata$4           @  ~           0�.idata$6           H                 ��%    ��                     ProvAutoEnrollment               	                    .text           .data           .bss            .idata$7        .idata$5        .idata$4        .idata$6                                          0            J   ProvAutoEnrollment __imp_ProvAutoEnrollment _head_lib64_libpautoenr_a dwhns00001.o/   1417974351  0     0     100666  634       `
d�     �  
      .text              ,  \           0`.data                               @ 0�.bss                                � 0�.idata$7           4  f           0�.idata$5           8  p           0�.idata$4           @  z           0�.idata$6           H                 ��%    ��                     CertAutoRemove               	                    .text           .data           .bss            .idata$7        .idata$5        .idata$4        .idata$6                                          (            B   CertAutoRemove __imp_CertAutoRemove _head_lib64_libpautoenr_a dwhns00000.o/   1417974351  0     0     100666  646       `
d�     �  
      .text              ,  `           0`.data                               @ 0�.bss                                � 0�.idata$7           4  j           0�.idata$5           8  t           0�.idata$4           @  ~           0�.idata$6           H                 ��%    ��                      CertAutoEnrollment               	                    .text           .data           .bss            .idata$7        .idata$5        .idata$4        .idata$6                                          0            J   CertAutoEnrollment __imp_CertAutoEnrollment _head_lib64_libpautoenr_a                                                                                                                                                                                                                                                                                                                                                   �PNG

   IHDR   
      u�0   tEXtSoftware Adobe ImageReadyq�e<  siTXtXML:com.adobe.xmp     <?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?> <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.5-c014 79.151481, 2013/03/13-12:09:15        "> <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"> <rdf:Description rdf:about="" xmlns:xmpMM="http://ns.adobe.com/xap/1.0/mm/" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:xmp="http://ns.adobe.com/xap/1.0/" xmpMM:OriginalDocumentID="xmp.did:e83ec372-bb1d-4c57-9c59-2c1a607fddba" xmpMM:DocumentID="xmp.did:C279E190350E11E49119C2D9ADF17856" xmpMM:InstanceID="xmp.iid:451316B234FB11E49119C2D9ADF17856" xmp:CreatorTool="Adobe Photoshop CC (Macintosh)"> <xmpMM:DerivedFrom stRef:instanceID="xmp.iid:04b49bdd-8a76-43dd-b1fc-b95f91a4bb6d" stRef:documentID="xmp.did:e83ec372-bb1d-4c57-9c59-2c1a607fddba"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end="r"?>6u��   IDATx�b���?2�1c����!�,�	���101	�V�8}����C�7���C}�H[�`ǏD)���Lga"�b&���c&��:X`u�栍�o_@Y��&f����8f�����6:��0 ��/^��ߚ    IEND�B`�                                                                                                                                                                                                                                                                                                                                                                                                                                    ~ d�/Y]-*�Y2�����O�v��?�Qr~б�S~R.�����Y���A�}ɟi� D��Xh�՚]8��'+����&��G�������[Y��d�4څq����J�5zR߬����L�#ի
�o�z�j���jl�j�%�§�|�m.��<��cM���X��b֤dDD�DD@DD����եd������oO�HC��F�Mn�}���=�Q[��~���*�Ӡ f�Euh�m���fs������3��􉘕~=|DN�1bD�z��ҵ���*���U�J)�&ZQ���\(�9��ٷj����-�1kR0�Dʑ��7����R}���?�%����L�'�>�3� DD_��<� Ys��ץ e�)?)�zw����q�J/jA]J�0 �@�Ͳ" """ """ %'�oٗ��]�?���'�Kr|m5��i����""��[�]%{��8.����ݯ�`���s����ć��>��*0��q�cO�{�i	��yw��%��[}%AF��fR9��ە�/J� PAnr3�5jY����Z�,w>���v��i�\֡�1��p� ~�����J�m��������u&$g�Z����m�Ͼx�_P}�o�Q���ʹ��95�8>����M�ʹ[3���K�Ms��B�[n�hzS,�Ty98�MI�Nuj���.A[7g�N�WsԻv�;_$`�@�1ɩx�H�j�ʩ�h�d�s�I�f_��L� k}�$�=#�Rq)>ҫ5(�ϐ�zw6�뱀�1��Mt֛��@�>D��/&��#��~Sm����Q����{��O�}S�KBX��S��g��y���������HU;e���v��1:�5ЮH�U��A,��/o5�� t�Q=Z:X�ІS�#�#��>�\i)�C)a�N;	�T�]ڑ�m�y�$?甖��S�_�yϩ�'d�Uf��%H*G���L#�-R� ���/~f����>�2�y�O��:��wc'�O�%�;t�� 	�c$)��������}�6�������?LN�%�*��»����9պ�(l�h*	#�  ��Ij%>+��������Qa�o�v���8 ���?��F�n������ŮHyw�笠^���q�!�mE���	3��������ק>
����˴��������U.9� ��@��|3U��lV��0 �I� �O6��J�Kn��?��S�]:�2��q�=	��Nc\��(UJ������RkU��Ղmu;�l���rs�,��֠�Ons��ۋV���3���<���NQ�UcR	R�J�6���GYbm*PX��8�B���2��JT�;�F|�y�kN��nj��$�3��j�:����f���9օ V�5��� 3�g� 0`�*�d�QMJZ�p1����K�<�;�������~G�ɳ[���}�0+u�X�R���9����o�ZZ��Y$)�W9�É�5�ٕt�eN��x=�~s}V�4Ȭ��ʹ`���� 35�]��T�r��p|�;�=9ѕ�a�����8=��n�zu��x�!A=����6�YU:�K�\�����Z�jԔ�H�}"kE������HϤ@���i���Q������I`Y�X>&@*T���'�%ЮҊFs�y͠y�ޏn�]��8r;~u�?J�F��(�a�,G����FNO!@@��(��ؠ���K�*��9c]>'�u�|M��'�?OY�b��dp;M�B�R��(��o��i�I��k9\��������*(U�� /`��{��㋔�=D�U���X�����	�9@�  D�J)VR�قs����XP7����̺eV �#>Fc�M�&��ݎqM6�gM�*�]��<�-��&�3�IPAq1]iZ��B�� ��_���VQ0Ŕ���Mo�}�Bǎ0��j�-����U� '����Z�
 I#��O�mboB���583!@$�2{����� v�����%TS��b�s��}��`�q�;@��W��}�x��a�Ǟ?<:j޻�-r�����|� ��*p�6�s��c0*�j��o�{��O���L���S�� mǋ��F1����,N��ri��R�nA$ 	��[A��غ����Ha����Y9(��"��                                                                                                                                                                                                                                                                                                                                                                                        %!PS-Adobe-3.0 Resource-CMap
%%DocumentNeededResources: ProcSet (CIDInit)
%%DocumentNeededResources: CMap (HKdla-B5-H)
%%IncludeResource: ProcSet (CIDInit)
%%IncludeResource: CMap (HKdla-B5-H)
%%BeginResource: CMap (HKdla-B5-V)
%%Title: (HKdla-B5-V Adobe CNS1 1)
%%Version: 12.002
%%Copyright: -----------------------------------------------------------
%%Copyright: Copyright 1990-2009 Adobe Systems Incorporated.
%%Copyright: All rights reserved.
%%Copyright:
%%Copyright: Redistribution and use in source and binary forms, with or
%%Copyright: without modification, are permitted provided that the
%%Copyright: following conditions are met:
%%Copyright:
%%Copyright: Redistributions of source code must retain the above
%%Copyright: copyright notice, this list of conditions and the following
%%Copyright: disclaimer.
%%Copyright:
%%Copyright: Redistributions in binary form must reproduce the above
%%Copyright: copyright notice, this list of conditions and the following
%%Copyright: disclaimer in the documentation and/or other materials
%%Copyright: provided with the distribution. 
%%Copyright:
%%Copyright: Neither the name of Adobe Systems Incorporated nor the names
%%Copyright: of its contributors may be used to endorse or promote
%%Copyright: products derived from this software without specific prior
%%Copyright: written permission. 
%%Copyright:
%%Copyright: THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
%%Copyright: CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
%%Copyright: INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
%%Copyright: MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
%%Copyright: DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
%%Copyright: CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
%%Copyright: SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
%%Copyright: NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
%%Copyright: LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
%%Copyright: HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
%%Copyright: CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
%%Copyright: OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
%%Copyright: SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
%%Copyright: -----------------------------------------------------------
%%EndComments

/CIDInit /ProcSet findresource begin

12 dict begin

begincmap

/HKdla-B5-H usecmap

/CIDSystemInfo 3 dict dup begin
  /Registry (Adobe) def
  /Ordering (CNS1) def
  /Supplement 1 def
end def

/CMapName /HKdla-B5-V def
/CMapVersion 12.002 def
/CMapType 1 def

/XUID [1 10 25522] def

/WMode 1 def

12 begincidrange
<a14b> <a14b> 13646
<a15a> <a15a> 13743
<a15c> <a15c> 13745
<a15d> <a15e> 130
<a161> <a162> 134
<a165> <a166> 138
<a169> <a16a> 142
<a16d> <a16e> 146
<a171> <a172> 150
<a175> <a176> 154
<a179> <a17a> 158
<a1e3> <a1e3> 13647
endcidrange
endcmap
CMapName currentdict /CMap defineresource pop
end
end

%%EndResource
%%EOF
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     o v e M s g = T h i s   a p p l i c a t i o n   h a s   b e e n   m o v e d   f r o m   t h e   l o c a t i o n   i n   w h i c h   i t   w a s   o r i g i n a l l y   i n s t a l l e d   a n d   c a n n o t   b e   l a u n c h e d   u n t i l   i t   i s   m o v e d   b a c k .   P l e a s e   r e t u r n   t h i s   a p p l i c a t i o n ' s   f o l d e r   t o : "  
 " $ $ $ / a m t / a l e r t / a p p M o v e d C a n t M o v e O K = O K "  
 " $ $ $ / a m t / a l e r t / E x p i r e d = L i c e n s e ��" $ $ $ / a m t / m e n u / l i c e n s i n g = _U(u"   
 " $ $ $ / a m t / m e n u / a c t i v a t e = _U(u. . . "   
 " $ $ $ / a m t / m e n u / d e a c t i v a t e = �[�V_U(u. . . "   
 " $ $ $ / a m t / m e n u / n o t _ v a l i d a t e d = �c
k*gW�I�"   
 " $ $ $ / a m t / m e n u / a c t i v a t e _ n o t _ v a l i d a t e d = _U(u. . . "   
 " $ $ $ / a m t / m e n u / r e t u r n _ n o t _ v a l i d a t e d = �S�m_U(u. . . "   
 " $ $ $ / a m t / m e n u / a c t i v a t e _ n o t _ v a l i d a t e d _ v o l u m e = N	�  e - l i c e n s e . . . "   
 " $ $ $ / a m t / m e n u / r e t u r n _ n o t _ v a l i d a t e d _ v o l u m e = �P�V  e - l i c e n s e . . . "   
 " $ $ $ / a m t / m e n u / r e g i s t r a t i o n = "u�T;��Q. . . "   
 " $ $ $ / a m t / m e n u / e x t e n d e d p r o f i l e = �[b/ �f�e  A d o b e   I D   �c���j. . . "   
 " $ $ $ / a m t / m e n u / u p d a t e s = �f�e. . . "   
 " $ $ $ / a m t / m e n u / s e r i a l i z e = 8�eQ�^_�. . . "   
 " $ $ $ / a m t / m e n u / e u l a = �c
kT}. . . "   
 " $ $ $ / a m t / a l e r t / s u b S y s t e m F a i l u r e = dk"u�T�v�c
k�]!q�lO(u0"   
 " $ $ $ / a m t / a l e r t / s u b S y s t e m F a i l u r e C o n f i g E r r = D}Ka/���"   
 " $ $ $ / a m t / a l e r t / s u b S y s t e m F a i l u r e C o n f i g u r a t i o n M s g = ˊ�d��[݈"u�T�6q�_͑�e�[݈0\ n \ n �Y�g�N|vuOUL��ˊ�  A d o b e   �bS�/e�c-N�_o�a}�&N�c�Odkkub�N�eo�:y�v/����x��N�S�_TS�R0\ n \ n /���: "   
 " $ $ $ / a m t / a l e r t / s u b S y s t e m F a i l u r e L i c e n s i n g M s g = �c
kdk"u�TBf|vuOUL�0ˊ͑�e_U�R��f��6q�_͑�e_U�R"u�T0\ n \ n �Y�g͑�e_U�R�_�N|vuOUL��ˊo�a}�[6b/e�c�&N�c�Odkkub�N�eo�:y�v/����x��N�S�_2� Nek�vTS�R0\ n \ n /���:   "   
 " $ $ $ / a m t / a l e r t / s u p p o r t U R L = h t t p : / / w w w . a d o b e . c o m / t w / s u p p o r t / "   
 " $ $ $ / a m t / a l e r t / a p p H a s M o v e d = �]�y�R�v�a(uz_"   
 " $ $ $ / a m t / a l e r t / a p p H a s M o v e d M s g = dk�a(uz_�]�}�y�R��NvQ_�]�}���f0傁��f�e"u�T-��[�ˊ	c NN0�f�e00"   
 " $ $ $ / a m t / a l e r t / a p p M o v e d O K = �f�e"   
 " $ $ $ / a m t / a l e r t / a p p M o v e d C a n c e l = N���f�e"   
 " $ $ $ / a m t / a l e r t / a p p H a s M o v e d C a n t M o v e = �a(uz_�]�y�R"   
 " $ $ $ / a m t / a l e r t / a p p H a s M o v e d C a n t M o v e M s g = dk�a(uz_�]�_�S,g�[݈�vMOn�y�R��_��y�R�V�S,g�vMOnMb��_U�R0ˊ\�a(uz_�jHh>Y>e�V: "   
 " $ $ $ / a m t / a l e r t / a p p M o v e d C a n t M o v e O K = �x�["   
 " $ $ $ / a m t / a l e r t / E x p i r e d = �c
k�]N�g"   
 " $ $ $ / a m t / a l e r t / E x p i r e d M s g = dk"u�T�v�c
k�]N�g0"   
 " $ $ $ / a m t / a l e r t / N o t A c t i v a t e d I n S u i t e =  ���_U(uWY�N"u�T"   
 " $ $ $ / a m t / a l e r t / N o t A c t i v a t e d I n S u i t e M s g = ^ 0   �]�[݈�pWY�N�v N�R0傁�_U�R  ^ 0 �ˊ��_UdkWY�N�vvQ�NCQ�N  ( �O�Y  ^ 1 ) 0"   
 " $ $ $ / a m t / a l e r t / N o t A c t i v a t e d I n S u i t e P r o d u c t = A d o b e   A c r o b a t "   
 " $ $ $ / a m t / a l e r t / N o t A c t i v a t e d I n S u i t e P r o d u c t A c t i v a t i n g P r o d u c t = A d o b e   P h o t o s h o p "   
 " $ $ $ / a m t / a l e r t / D e a c t i v a t e = �S�m_U(u"   
 " $ $ $ / a m t / a l e r t / D e a c t i v a t e M s g = �S�m_U(u ����|q}�{t�TW�I��ˊ(W�|q}�{t�T!j_-N�WL��a(uz_&N�S�m_U(u0"   
 " $ $ $ / a m t / a l e r t / D e a c t i v a t e O K = �x�["   
 " $ $ $ / a m t / u r l / E x t e n d e d P r o f i l e R e g = h t t p : / / w w w . a d o b e . c o m / g o / a d o b e m e m b e r s h i p _ t w "   
 " $ $ $ / a m t / u r l / P r o d u c t R e g i s t r a t i o n = h t t p : / / w w w . a d o b e . c o m / g o / r e g i s t e r _ t w "   
 " $ $ $ / a m t / a l e r t / G u e s t U s e r = *��[3^6b"   
 " $ $ $ / a m t / a l e r t / G u e s t U s e r M s g = !q�l�N�*��[3^6bO(u,g"u�T"   
                                                               ﻿<?xml version="1.0" encoding="utf-8" standalone="no" ?>
<!DOCTYPE asf SYSTEM "http://ns.adobe.com/asf/asf_1_0.dtd">
<asf locale="en_US" version="1.0" xmlns="http://ns.adobe.com/asf">
<set name="Entry1">
<str name="displayName">
<val>Phone Numbers</val>
</str>
<str name="regEx" translate="no">
<val>(\b\s?)((\+?\d{1}(-|\s|\.|_))((\(\d{3}\)|\d{3})(-|\s|\.|_)?)|((\(\d{3}\)|\d{3})(-|\s|\.|_)?))?(\d{3}(-|\s|\.|_)\d{4})(\b)</val>
</str>
<str name="examples">
<val>This pattern will search for 7-digit phone numbers separated by punctuation marks, as well as leading area codes.

For example:
555-1212
212.555.1212
1 (212) 555-1212</val>
</str>
</set>
<set name="Entry2">
<str name="displayName">
<val>Credit Cards</val>
</str>
<str name="regEx" translate="no">
<val>(\b)(((\d{4}(-|\s|\.|_)?){3}(\d{3,4}))|(\d{4}(-|\s|\.|_)?\d{6}(-|\s|\.|_)?\d{5}))(\b)</val>
</str>
<str name="examples">
<val>This pattern will search for 16-digit credit card numbers, either consecutive or separated by punctuation marks.

For example:
1234-5678-9012-3456
1234567890123456
1234 5678 9012 3456</val>
</str>
</set>
<set name="Entry3">
<str name="displayName">
<val>Social Security Numbers</val>
</str>
<str name="regEx" translate="no">
<val>(\b)(((\d{3}(-|\s|\.|_)){2}\d{3})|(\d{9}))(\b)</val>
</str>
<str name="examples">
<val>This pattern will search for 9-digit social insurance numbers, either consecutive or 3 digits plus 3 digits plus 3 digits (separated by punctuation marks).

For example:
123-456-789
123456789
123 456 789</val>
</str>
</set>
<set name="Entry4">
<str name="displayName">
<val>Email Addresses</val>
</str>
<str name="regEx" translate="no">
<val>([a-zA-Z0-9_])([a-zA-Z0-9_\-\.])*@([a-zA-Z\-])+\.([a-zA-Z\.]+)</val>
</str>
<str name="examples">
<val>This pattern will search for email addresses.

For example:
John.Doe@acme.com
John_Doe_1234@acme.gov
j-doe@marketing.acme.net</val>
</str>
</set>
<set name="Entry5">
<str name="displayName">
<val>Dates</val>
</str>
<str name="regEx" translate="no">
<val>(\b)(((\d{2}(\||\-|\.|\s|\\|/|_)){2}\d{2}(\d{2})?)|(\d{4}((\||\-|\.|\s|\\|/|_)\d{2}){2})|(\d{6}(\d{2})?))(\b)</val>
</str>
<str name="examples">
<val>This pattern will search for 6-8 digit numbers, either consecutive or separated by punctuation marks. For example: 
01-01-2008
2008-01-01
01-01-08 </val>
</str>
</set>
</asf>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ﻿<?xml version="1.0" encoding="UTF-8"?>
<RedactionSet Name="U.S. FOIA" >
<RedactionCode Name="(b) (1) (A)" />
<RedactionCode Name="(b) (1) (B)" />
<RedactionCode Name="(b) (2)" />
<RedactionCode Name="(b) (3) (A)" />
<RedactionCode Name="(b) (3) (B)" />
<RedactionCode Name="(b) (4)" />
<RedactionCode Name="(b) (5)" />
<RedactionCode Name="(b) (6)" />
<RedactionCode Name="(b) (7)(A)" />
<RedactionCode Name="(b) (7)(B)" />
<RedactionCode Name="(b) (7)(C)" />
<RedactionCode Name="(b) (7)(D)" />
<RedactionCode Name="(b) (7)(E)" />
<RedactionCode Name="(b) (7)(F)" />
<RedactionCode Name="(b) (8)"