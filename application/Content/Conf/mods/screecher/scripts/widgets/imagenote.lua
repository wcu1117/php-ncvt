ls, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DCubeTexture9 **cube);
HRESULT WINAPI D3DXCreateCubeTextureFromResourceExW(struct IDirect3DDevice9 *device, HMODULE srcmodule,
        const WCHAR *resource, UINT size, UINT miplevels, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DCubeTexture9 **cube);
#define D3DXCreateCubeTextureFromResourceEx __MINGW_NAME_AW(D3DXCreateCubeTextureFromResourceEx)

HRESULT WINAPI D3DXCreateVolumeTextureFromResourceExA(struct IDirect3DDevice9 *device, HMODULE srcmodule,
        const char *resource, UINT width, UINT height, UINT depth, UINT miplevels, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DVolumeTexture9 **volume);
HRESULT WINAPI D3DXCreateVolumeTextureFromResourceExW(struct IDirect3DDevice9 *device, HMODULE srcmodule,
        const WCHAR *resource, UINT width, UINT height, UINT depth, UINT miplevels, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DVolumeTexture9 **volume);
#define D3DXCreateVolumeTextureFromResourceEx __MINGW_NAME_AW(D3DXCreateVolumeTextureFromResourceEx)

HRESULT WINAPI D3DXCreateTextureFromFileInMemory(struct IDirect3DDevice9 *device,
        const void *srcdata, UINT srcdatasize, struct IDirect3DTexture9 **texture);
HRESULT WINAPI D3DXCreateCubeTextureFromFileInMemory(struct IDirect3DDevice9 *device,
        const void *srcdata, UINT srcdatasize, struct IDirect3DCubeTexture9 **cube);
HRESULT WINAPI D3DXCreateVolumeTextureFromFileInMemory(struct IDirect3DDevice9 *device,
        const void *srcdata, UINT srcdatasize, struct IDirect3DVolumeTexture9 **volume);

HRESULT WINAPI D3DXCreateTextureFromFileInMemoryEx(struct IDirect3DDevice9 *device, const void *srcdata,
        UINT srcdatasize, UINT width, UINT height, UINT miplevels, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DTexture9 **texture);
HRESULT WINAPI D3DXCreateCubeTextureFromFileInMemoryEx(struct IDirect3DDevice9 *device, const void *srcdata,
        UINT srcdatasize, UINT size, UINT miplevels, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DCubeTexture9 **cube);
HRESULT WINAPI D3DXCreateVolumeTextureFromFileInMemoryEx(struct IDirect3DDevice9 *device, const void *srcdata,
        UINT srcdatasize, UINT width, UINT height, UINT depth, UINT miplevels, DWORD usage, D3DFORMAT format,
        D3DPOOL pool, DWORD filter, DWORD mipfilter, D3DCOLOR colorkey, D3DXIMAGE_INFO *srcinfo,
        PALETTEENTRY *palette, struct IDirect3DVolumeTexture9 **volume);

HRESULT WINAPI D3DXSaveTextureToFileInMemory(struct ID3DXBuffer **destbuffer, D3DXIMAGE_FILEFORMAT destformat,
        struct IDirect3DBaseTexture9 *srctexture, const PALETTEENTRY *srcpalette);
HRESULT WINAPI D3DXSaveTextureToFileA(const char *destfile, D3DXIMAGE_FILEFORMAT destformat,
        struct IDirect3DBaseTexture9 *srctexture, const PALETTEENTRY *srcpalette);
HRESULT WINAPI D3DXSaveTextureToFileW(const WCHAR *destfile, D3DXIMAGE_FILEFORMAT destformat,
        struct IDirect3DBaseTexture9 *srctexture, const PALETTEENTRY *srcpalette);
#define D3DXSaveTextureToFile __MINGW_NAME_AW(D3DXSaveTextureToFile)

/* Other functions */
HRESULT WINAPI D3DXFilterTexture(struct IDirect3DBaseTexture9 *texture,
        const PALETTEENTRY *palette, UINT srclevel, DWORD filter);
#define D3DXFilterCubeTexture D3DXFilterTexture
#define D3DXFilterVolumeTexture D3DXFilterTexture

HRESULT WINAPI D3DXFillTexture(struct IDirect3DTexture9 *texture, LPD3DXFILL2D function, void *data);
HRESULT WINAPI D3DXFillCubeTexture(struct IDirect3DCubeTexture9 *cube, LPD3DXFILL3D function, void *data);
HRESULT WINAPI D3DXFillVolumeTexture(struct IDirect3DVolumeTexture9 *volume, LPD3DXFILL3D function, void *data);

HRESULT WINAPI D3DXFillTextureTX(struct IDirect3DTexture9 *texture, const DWORD *function,
        const D3DXVECTOR4 *constants, UINT numconstants);
HRESULT WINAPI D3DXFillCubeTextureTX(struct IDirect3DCubeTexture9 *cube, const DWORD *function,
        const D3DXVECTOR4 *constants, UINT numconstants);
HRESULT WINAPI D3DXFillVolumeTextureTX(struct IDirect3DVolumeTexture9 *volume, const DWORD *function,
        const D3DXVECTOR4 *constants, UINT numconstants);

HRESULT WINAPI D3DXComputeNormalMap(IDirect3DTexture9 *texture, IDirect3DTexture9 *srctexture,
        const PALETTEENTRY *srcpalette, DWORD flags, DWORD channel, float amplitude);

#ifdef __cplusplus
}
#endif

#endif /* __WINE_D3DX9TEX_H */
                                       ?+  �   ) �� {,  �   ) �� �,  �   ) �� �,  �   ) �� -  �   ) �� W-  �   ) �� �-  �   ) �� �-  �   ) �� .  �   ) �� E.  �   ) �� �.  �   ) �� �.  �   ) �� �.  �   ) �� 5/  �   ) �� /  �   ) �� �/  �   ) �� �/  �   ) �� ;0  �   ) �� "1  �   ) �� 2  �   ) �� �3  �   ) �� �3  �   ) �� �3  �   ) �� �4  �   ) �� �5  �   ) �� �5  �   ) �� 76  �   ) �� �6  �   ) �� �6  �   ) �� 7  �   ) �� 7  �   ) �� �7  �   ) �� /8  �   ) �� {8  �   ) �� �8  �   ) �� 9  �   ) �� _9  �   ) �� �9  �   ) �� :  �   ) �� �;      ) �� <      ) ��� *<  �   ) �� �<