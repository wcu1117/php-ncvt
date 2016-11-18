igned *vPerFace,
        DWORD *fDataSize, unsigned *fData) PURE;
    STDMETHOD(GetVertices)(THIS_ D3DRMGROUPINDEX id, DWORD index, DWORD count, D3DRMVERTEX *returnPtr) PURE;
    STDMETHOD_(D3DCOLOR, GetGroupColor)(THIS_ D3DRMGROUPINDEX id) PURE;
    STDMETHOD_(D3DRMMAPPING, GetGroupMapping)(THIS_ D3DRMGROUPINDEX id) PURE;
    STDMETHOD_(D3DRMRENDERQUALITY, GetGroupQuality)(THIS_ D3DRMGROUPINDEX id) PURE;
    STDMETHOD(GetGroupMaterial)(THIS_ D3DRMGROUPINDEX id, struct IDirect3DRMMaterial **material) PURE;
    STDMETHOD(GetGroupTexture)(THIS_ D3DRMGROUPINDEX id, struct IDirect3DRMTexture **texture) PURE;
};
#undef INTERFACE

#if !defined(__cplusplus) || defined(CINTERFACE)
/*** IUnknown methods ***/
#define IDirect3DRMMesh_QueryInterface(p,a,b)              (p)->lpVtbl->QueryInterface(p,a,b)
#define IDirect3DRMMesh_AddRef(p)                          (p)->lpVtbl->AddRef(p)
#define IDirect3DRMMesh_Release(p)                         (p)->lpVtbl->Release(p)
/*** IDirect3DRMObject methods ***/
#define IDirect3DRMMesh_Clone(p,a,b,c)                     (p)->lpVtbl->Clone(p,a,b,c)
#define IDirect3DRMMesh_AddDestroyCallback(p,a,b)          (p)->lpVtbl->AddDestroyCallback(p,a,b)
#define IDirect3DRMMesh_DeleteDestroyCallback(p,a,b)       (p)->lpVtbl->DeleteDestroyCallback(p,a,b)
#define IDirect3DRMMesh_SetAppData(p,a)                    (p)->lpVtbl->SetAppData(p,a)
#define IDirect3DRMMesh_GetAppData(p)                      (p)->lpVtbl->GetAppData(p)
#define IDirect3DRMMesh_SetName(p,a)                       (p)->lpVtbl->SetName(p,a)
#define IDirect3DRMMesh_GetName(p,a,b)                     (p)->lpVtbl->GetName(p,a,b)
#define IDirect3DRMMesh_GetClassName(p,a,b)                (p)->lpVtbl->GetClassName(p,a,b)
/*** IDirect3DRMMesh methods ***/
#define IDirect3DRMMesh_Scale(p,a,b,c)                     (p)->lpVtbl->Scale(p,a,b,c)
#define IDirect3DRMMesh_Translate(p,a,b,c)                 (p)->lpVtbl->Translate(p,a,b,c)
#define IDirect3DRMMesh_GetBox(p,a)                        (p)->lpVtbl->GetBox(p,a)
#define IDirect3DRMMesh_AddGroup(p,a,b,c,d,e)              (p)->lpVtbl->AddGroup(p,a,b,c,d,e)
#define IDirect3DRMMesh_SetVertices(p,a,b,c,d)             (p)->lpVtbl->SetVertices(p,a,b,c,d)
#define IDirect3DRMMesh_SetGroupColor(p,a,b)               (p)->lpVtbl->SetGroupColor(p,a,b)
#define IDirect3DRMMesh_SetGroupColorRGB(p,a,b,c,d)        (p)->lpVtbl->SetGroupColorRGB(p,a,b,c,d)
#define IDirect3DRMMesh_SetGroupMapping(p,a,b)             (p)->lpVtbl->SetGroupMapping(p,a,b)
#define IDirect3DRMMesh_SetGroupQuality(p,a,b)             (p)->lpVtbl->SetGroupQuality(p,a,b)
#define IDirect3DRMMesh_SetGroupMaterial(p,a,b)            (p)->lpVtbl->SetGroupMaterial(p,a,b)
#define IDirect3DRMMesh_SetGroupTexture(p,a,b)             (p)->lpVtbl->SetGroupTexture(p,a,b)
#define IDirect3DRMMesh_GetGroupCount(p)                   (p)->lpVtbl->GetGroupCount(p)
#define IDirect3DRMMesh_GetGroup(p,a,b,c,d,e,f)            (p)->lpVtbl->GetGroup(p,a,b,c,d,e,f)
#define IDirect3DRMMesh_GetVertices(p,a,b,c,d)             (p)->lpVtbl->GetVertices(p,a,b,c,d)
#define IDirect3DRMMesh_GetGroupColor(p,a)                 (p)->lpVtbl->GetGroupColor(p,a)
#define IDirect3DRMMesh_GetGroupMapping(p,a)               (p)->lpVtbl->GetGroupMapping(p,a)
#define IDirect3DRMMesh_GetGroupQuality(p,a)               (p)->lpVtbl->GetGroupQuality(p,a)
#define IDirect3DRMMesh_GetGroupMaterial(p,a,b)            (p)->lpVtbl->GetGroupMaterial(p,a,b)
#define IDirect3DRMMesh_GetGroupTexture(p,a,b)             (p)->lpVtbl->GetGroupTexture(p,a,b)
#else
/*** IUnknown methods ***/
#define IDirect3DRMMesh_QueryInterface(p,a,b)              (p)->QueryInterface(a,b)
#define IDirect3DRMMesh_AddRef(p)                          (p)->AddRef()
#define IDirect3DRMMesh_Release(p)                         (p)->Release()
/*** IDirect3DRMObject methods ***/
#define IDirect3DRMMesh_Clone(p,a,b,c)                     (p)->Clone(a,b,c)
#define IDirect3DRMMesh_AddDestroyCallback(p,a,b)          (p)->AddDestroyCallback(a,b)
#define IDirect3DRMMesh_DeleteDestroyCallback(p,a,b)       (p)->DeleteDestroyCallback(a,b)
#define IDirect3DRMMesh_SetAppData(p,a)                    (p)->SetAppData(a)
#define IDirect3DRMMesh_GetAppData(p)                      (p)->GetAppData()
#define IDirect3DRMMesh_SetName(p,a)                       (p)->SetName(a)
#define IDirect3DRMMesh_GetName(p,a,b)                     (p)->GetName(a,b)
#define IDirect3DRMMesh_GetClassName(p,a,b)                (p)->GetClassName(a,b)
/*** IDir