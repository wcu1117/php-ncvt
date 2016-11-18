
KeRemoveQueueDpc(
  IN OUT PRKDPC Dpc);

NTKERNELAPI
LONG
NTAPI
KeResetEvent(
  IN OUT PRKEVENT Event);

NTKERNELAPI
LONG
NTAPI
KeSetEvent(
  IN OUT PRKEVENT Event,
  IN KPRIORITY Increment,
  IN BOOLEAN Wait);

NTKERNELAPI
VOID
NTAPI
KeSetImportanceDpc(
  IN OUT PRKDPC Dpc,
  IN KDPC_IMPORTANCE Importance);

NTKERNELAPI
KPRIORITY
NTAPI
KeSetPriorityThread(
  IN OUT PKTHREAD Thread,
  IN KPRIORITY Priority);

NTKERNELAPI
BOOLEAN
NTAPI
KeSetTimer(
  IN OUT PKTIMER Timer,
  IN LARGE_INTEGER DueTime,
  IN PKDPC Dpc OPTIONAL);

NTKERNELAPI
BOOLEAN
NTAPI
KeSetTimerEx(
  IN OUT PKTIMER Timer,
  IN LARGE_INTEGER DueTime,
  IN LONG Period OPTIONAL,
  IN PKDPC Dpc OPTIONAL);

NTHALAPI
VOID
NTAPI
KeStallExecutionProcessor(
  IN ULONG MicroSeconds);

NTKERNELAPI
BOOLEAN
NTAPI
KeSynchronizeExecution(
  IN OUT PKINTERRUPT Interrupt,
  IN PKSYNCHRONIZE_ROUTINE SynchronizeRoutine,
  IN PVOID SynchronizeContext OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
KeWaitForMultipleObjects(
  IN ULONG Count,
  IN PVOID Object[],
  IN WAIT_TYPE WaitType,
  IN KWAIT_REASON WaitReason,
  IN KPROCESSOR_MODE WaitMode,
  IN BOOLEAN Alertable,
  IN PLARGE_INTEGER Timeout OPTIONAL,
  OUT PKWAIT_BLOCK WaitBlockArray OPTIONAL);

#define KeWaitForMutexObject KeWaitForSingleObject

NTKERNELAPI
NTSTATUS
NTAPI
KeWaitForSingleObject(
  IN PVOID Object,
  IN KWAIT_REASON WaitReason,
  IN KPROCESSOR_MODE WaitMode,
  IN BOOLEAN Alertable,
  IN PLARGE_INTEGER Timeout OPTIONAL);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_WINXP)

_DECL_HAL_KE_IMPORT
VOID
FASTCALL
KeAcquireInStackQueuedSpinLock(
  IN OUT PKSPIN_LOCK SpinLock,
  OUT PKLOCK_QUEUE_HANDLE LockHandle);

NTKERNELAPI
VOID
FASTCALL
KeAcquireInStackQueuedSpinLockAtDpcLevel(
  IN OUT PKSPIN_LOCK SpinLock,
  OUT PKLOCK_QUEUE_HANDLE LockHandle);

NTKERNELAPI
KIRQL
NTAPI
KeAcquireInterruptSpinLock(
  IN OUT PKINTERRUPT Interrupt);

NTKERNELAPI
BOOLEAN
NTAPI
KeAreApcsDisabled(VOID);

NTKERNELAPI
ULONG
NTAPI
KeGetRecommendedSharedDataAlignment(VOID);

NTKERNELAPI
ULONG
NTAPI
KeQueryRuntimeThread(
  IN PKTHREAD Thread,
  OUT PULONG UserTime);

NTKERNELAPI
VOID
FASTCALL
KeReleaseInStackQueuedSpinLockFromDpcLevel(
  IN PKLOCK_QUEUE_HANDLE LockHandle);

NTKERNELAPI
VOID
NTAPI
KeReleaseInterruptSpinLock(
  IN OUT PKINTERRUPT Interrupt,
  IN KIRQL OldIrql);

NTKERNELAPI
PKDEVICE_QUEUE_ENTRY
NTAPI
KeRemoveByKeyDeviceQueueIfBusy(
  IN OUT PKDEVICE_QUEUE DeviceQueue,
  IN ULONG SortKey);

_DECL_HAL_KE_IMPORT
VOID
FASTCALL
KeReleaseInStackQueuedSpinLock(
  IN PKLOCK_QUEUE_HANDLE LockHandle);

#endif /* (NTDDI_VERSION >= NTDDI_WINXP) */

#if (NTDDI_VERSION >= NTDDI_WINXPSP1)

NTKERNELAPI
BOOLEAN
NTAPI
KeDeregisterBugCheckReasonCallback(
  IN OUT PKBUGCHECK_REASON_CALLBACK_RECORD CallbackRecord);

NTKERNELAPI
BOOLEAN
NTAPI
KeRegisterBugCheckReasonCallback(
  OUT PKBUGCHECK_REASON_CALLBACK_RECORD CallbackRecord,
  IN PKBUGCHECK_REASON_CALLBACK_ROUTINE CallbackRoutine,
  IN KBUGCHECK_CALLBACK_REASON Reason,
  IN PUCHAR Component);

#endif /* (NTDDI_VERSION >= NTDDI_WINXPSP1) */

#if (NTDDI_VERSION >= NTDDI_WINXPSP2)
NTKERNELAPI
VOID
NTAPI
KeFlushQueuedDpcs(VOID);
#endif /* (NTDDI_VERSION >= NTDDI_WINXPSP2) */
#if (NTDDI_VERSION >= NTDDI_WS03)

NTKERNELAPI
PVOID
NTAPI
KeRegisterNmiCallback(
  IN PNMI_CALLBACK CallbackRoutine,
  IN PVOID Context OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
KeDeregisterNmiCallback(
  IN PVOID Handle);

NTKERNELAPI
VOID
NTAPI
KeInitializeThreadedDpc(
  OUT PRKDPC Dpc,
  IN PKDEFERRED_ROUTINE DeferredRoutine,
  IN PVOID DeferredContext OPTIONAL);

NTKERNELAPI
ULONG_PTR
NTAPI
KeIpiGenericCall(
  IN PKIPI_BROADCAST_WORKER BroadcastFunction,
  IN ULONG_PTR Context);

NTKERNELAPI
KIRQL
FASTCALL
KeAcquireSpinLockForDpc(
  IN OUT PKSPIN_LOCK SpinLock);

NTKERNELAPI
VOID
FASTCALL
KeReleaseSpinLockForDpc(
  IN OUT PKSPIN_LOCK SpinLock,
  IN KIRQL OldIrql);

NTKERNELAPI
BOOLEAN
FASTCALL
KeTestSpinLock(
  IN PKSPIN_LOCK SpinLock);

#endif /* (NTDDI_VERSION >= NTDDI_WS03) */

#if (NTDDI_VERSION >= NTDDI_WS03SP1)

NTKERNELAPI
BOOLEAN
FASTCALL
KeTryToAcquireSpinLockAtDpcLevel(
  IN OUT PKSPIN_LOCK SpinLock);

NTKERNELAPI
BOOLEAN
NTAPI
KeAreAllApcsDisabled(VOID);

NTKERNELAPI
VOID
FASTCALL
KeAcquireGuardedMutex(
  IN OUT PKGUARDED_MUTEX GuardedMutex);

NTKERNELAPI
VOID
FASTCALL
KeAcquireGuardedMutexUnsafe(
  IN OUT PKGUARDED_MUTEX GuardedMutex);

NTKERNELAPI
VOID
NTAPI
KeEnterGuardedRegion(VOID);

NTKERNELAPI
VOID
NTAPI
KeLeaveGuardedRegion(VOID);

NTKERNELAPI
VOID
FASTCALL
KeInitializeGuardedMutex(
  OUT PKGUARDED_MUTEX GuardedMutex);

NTKERNELAPI
VOID
FASTCALL
KeReleaseGuardedMutexUnsafe(
  IN OUT PKGUARDED_MUTEX GuardedMutex);

NTKERNELAPI
VOID
FASTCALL
KeReleaseGuardedMutex(
  IN OUT PKGUARDED_MUTEX GuardedMutex);

NTKERNELAPI
BOOLEAN
FASTCALL
KeTryToAcquireGuardedMutex(
  IN OUT PKGUARDED_MUTEX GuardedMutex);
#endif /* (NTDDI_VERSION >= NTDDI_WS03SP1) */

#if (NTDDI_VERSION >= NTDDI_VISTA)
NTKERNELAPI
VOID
FASTCALL
KeAcquireInStackQueuedSpinLockForDpc(
  IN OUT PKSPIN_LOCK SpinLock,
  OUT PKLOCK_QUEUE_HANDLE LockHandle);

NTKERNELAPI
VOID
FASTCALL
KeReleaseInStackQueuedSpinLockForDpc(
  IN PKLOCK_QUEUE_HANDLE LockHandle);

NTKERNELAPI
NTSTATUS
NTAPI
KeQueryDpcWatchdogInformation(
  OUT PKDPC_WATCHDOG_INFORMATION WatchdogInformation);
#if defined(SINGLE_GROUP_LEGACY_API)

NTKERNELAPI
KAFFINITY
NTAPI
KeSetSystemAffinityThreadEx(
  IN KAFFINITY Affinity);

NTKERNELAPI
VOID
NTAPI
KeRevertToUserAffinityThreadEx(
  IN KAFFINITY Affinity);

NTKERNELAPI
ULONG
NTAPI
KeQueryActiveProcessorCount(
  OUT PKAFFINITY ActiveProcessors OPTIONAL);

NTKERNELAPI
ULONG
NTAPI
KeQueryMaximumProcessorCount(VOID);
#endif /* SINGLE_GROUP_LEGACY_API */

#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#if (NTDDI_VERSION >= NTDDI_WS08)

PVOID
KeRegisterProcessorChangeCallback(
  IN PPROCESSOR_CALLBACK_FUNCTION CallbackFunction,
  IN PVOID CallbackContext OPTIONAL,
  IN ULONG Flags);

VOID
KeDeregisterProcessorChangeCallback(
  IN PVOID CallbackHandle);

#endif /* (NTDDI_VERSION >= NTDDI_WS08) */
#if (NTDDI_VERSION >= NTDDI_WIN7)

ULONG64
NTAPI
KeQueryTotalCycleTimeProcess(
  IN OUT PKPROCESS Process,
  OUT PULONG64 CycleTimeStamp);

ULONG64
NTAPI
KeQueryTotalCycleTimeThread(
  IN OUT PKTHREAD Thread,
  OUT PULONG64 CycleTimeStamp);

NTKERNELAPI
NTSTATUS
NTAPI
KeSetTargetProcessorDpcEx(
  IN OUT PKDPC Dpc,
  IN PPROCESSOR_NUMBER ProcNumber);

NTKERNELAPI
VOID
NTAPI
KeSetSystemGroupAffinityThread(
  IN PGROUP_AFFINITY Affinity,
  OUT PGROUP_AFFINITY PreviousAffinity OPTIONAL);

NTKERNELAPI
VOID
NTAPI
KeRevertToUserGroupAffinityThread(
  IN PGROUP_AFFINITY PreviousAffinity);

NTKERNELAPI
BOOLEAN
NTAPI
KeSetCoalescableTimer(
  IN OUT PKTIMER Timer,
  IN LARGE_INTEGER DueTime,
  IN ULONG Period,
  IN ULONG TolerableDelay,
  IN PKDPC Dpc OPTIONAL);

NTKERNELAPI
ULONGLONG
NTAPI
KeQueryUnbiasedInterruptTime(VOID);

NTKERNELAPI
ULONG
NTAPI
KeQueryActiveProcessorCountEx(
  IN USHORT GroupNumber);

NTKERNELAPI
ULONG
NTAPI
KeQueryMaximumProcessorCountEx(
  IN USHORT GroupNumber);

NTKERNELAPI
USHORT
NTAPI
KeQueryActiveGroupCount(VOID);

NTKERNELAPI
USHORT
NTAPI
KeQueryMaximumGroupCount(VOID);

NTKERNELAPI
KAFFINITY
NTAPI
KeQueryGroupAffinity(
  IN USHORT GroupNumber);

NTKERNELAPI
ULONG
NTAPI
KeGetCurrentProcessorNumberEx(
  OUT PPROCESSOR_NUMBER ProcNumber OPTIONAL);

NTKERNELAPI
VOID
NTAPI
KeQueryNodeActiveAffinity(
  IN USHORT NodeNumber,
  OUT PGROUP_AFFINITY Affinity OPTIONAL,
  OUT PUSHORT Count OPTIONAL);

NTKERNELAPI
USHORT
NTAPI
KeQueryNodeMaximumProcessorCount(
  IN USHORT NodeNumber);

NTKERNELAPI
USHORT
NTAPI
KeQueryHighestNodeNumber(VOID);

NTKERNELAPI
USHORT
NTAPI
KeGetCurrentNodeNumber(VOID);

NTKERNELAPI
NTSTATUS
NTAPI
KeQueryLogicalProcessorRelationship(
  IN PPROCESSOR_NUMBER ProcessorNumber OPTIONAL,
  IN LOGICAL_PROCESSOR_RELATIONSHIP RelationshipType,
  OUT PSYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX Information OPTIONAL,
  IN OUT PULONG Length);

NTKERNELAPI
NTSTATUS
NTAPI
KeSaveExtendedProcessorState(
  IN ULONG64 Mask,
  OUT PXSTATE_SAVE XStateSave);

NTKERNELAPI
VOID
NTAPI
KeRestoreExtendedProcessorState(
  IN PXSTATE_SAVE XStateSave);

NTSTATUS
NTAPI
KeGetProcessorNumberFromIndex(
  IN ULONG ProcIndex,
  OUT PPROCESSOR_NUMBER ProcNumber);

ULONG
NTAPI
KeGetProcessorIndexFromNumber(
  IN PPROCESSOR_NUMBER ProcNumber);
#endif /* (NTDDI_VERSION >= NTDDI_WIN7) */
#if !defined(_IA64_)
NTHALAPI
VOID
NTAPI
KeFlushWriteBuffer(VOID);
#endif

/* VOID
 * KeInitializeCallbackRecord(
 *   IN PKBUGCHECK_CALLBACK_RECORD  CallbackRecord)
 */
#define KeInitializeCallbackRecord(CallbackRecord) \
  CallbackRecord->State = BufferEmpty;

#if DBG

#if (NTDDI_VERSION >= NTDDI_VISTA)
#define PAGED_ASSERT( exp ) NT_ASSERT( exp )
#else
#define PAGED_ASSERT( exp ) ASSERT( exp )
#endif

#define PAGED_CODE() { \
  if (KeGetCurrentIrql() > APC_LEVEL) { \
    KdPrint( ("NTDDK: Pageable code called at IRQL > APC_LEVEL (%d)\n", KeGetCurrentIrql() )); \
    PAGED_ASSERT(FALSE); \
  } \
}

#else

#define PAGED_CODE()

#endif /* DBG */

#define PAGED_CODE_LOCKED() NOP_FUNCTION;

/******************************************************************************
 *                       Memory manager Functions                             *
 ******************************************************************************/
/* Alignment Macros */
#define ALIGN_DOWN_BY(size, align) \
    ((ULONG_PTR)(size) & ~((ULONG_PTR)(align) - 1))

#define ALIGN_UP_BY(size, align) \
    (ALIGN_DOWN_BY(((ULONG_PTR)(size) + align - 1), align))

#define ALIGN_DOWN_POINTER_BY(ptr, align) \
    ((PVOID)ALIGN_DOWN_BY(ptr, align))

#define ALIGN_UP_POINTER_BY(ptr, align) \
    ((PVOID)ALIGN_UP_BY(ptr, align))

#define ALIGN_DOWN(size, type) \
    ALIGN_DOWN_BY(size, sizeof(type))

#define ALIGN_UP(size, type) \
    ALIGN_UP_BY(size, sizeof(type))

#define ALIGN_DOWN_POINTER(ptr, type) \
    ALIGN_DOWN_POINTER_BY(ptr, sizeof(type))

#define ALIGN_UP_POINTER(ptr, type) \
    ALIGN_UP_POINTER_BY(ptr, sizeof(type))

#ifndef FIELD_OFFSET
#define FIELD_OFFSET(type, field) ((ULONG)&(((type *)0)->field))
#endif

#ifndef FIELD_SIZE
#define FIELD_SIZE(type, field) (sizeof(((type *)0)->field))
#endif

#define POOL_TAGGING                             1

#if DBG
#define IF_DEBUG if (TRUE)
#else
#define IF_DEBUG if (FALSE)
#endif /* DBG */

/* ULONG
 * BYTE_OFFSET(
 *   IN PVOID Va)
 */
#define BYTE_OFFSET(Va) \
  ((ULONG) ((ULONG_PTR) (Va) & (PAGE_SIZE - 1)))

/* ULONG
 * BYTES_TO_PAGES(
 *   IN ULONG Size)
 *
 * Note: This needs to be like this to avoid overflows!
 */
#define BYTES_TO_PAGES(Size) \
  (((Size) >> PAGE_SHIFT) + (((Size) & (PAGE_SIZE - 1)) != 0))

/* PVOID
 * PAGE_ALIGN(
 *   IN PVOID Va)
 */
#define PAGE_ALIGN(Va) \
  ((PVOID) ((ULONG_PTR)(Va) & ~(PAGE_SIZE - 1)))

/* ULONG_PTR
 * ROUND_TO_PAGES(
 *   IN ULONG_PTR Size)
 */
#define ROUND_TO_PAGES(Size) \
  (((ULONG_PTR) (Size) + PAGE_SIZE - 1) & ~(PAGE_SIZE - 1))

/* ULONG
 * ADDRESS_AND_SIZE_TO_SPAN_PAGES(
 *   IN PVOID Va,
 *   IN ULONG Size)
 */
#define ADDRESS_AND_SIZE_TO_SPAN_PAGES(_Va, _Size) \
  ((ULONG) ((((ULONG_PTR) (_Va) & (PAGE_SIZE - 1)) \
    + (_Size) + (PAGE_SIZE - 1)) >> PAGE_SHIFT))

#define COMPUTE_PAGES_SPANNED(Va, Size) \
    ADDRESS_AND_SIZE_TO_SPAN_PAGES(Va,Size)

/*
 * ULONG
 * MmGetMdlByteCount(
 *   IN PMDL  Mdl)
 */
#define MmGetMdlByteCount(_Mdl) \
  ((_Mdl)->ByteCount)

/*
 * ULONG
 * MmGetMdlByteOffset(
 *   IN PMDL  Mdl)
 */
#define MmGetMdlByteOffset(_Mdl) \
  ((_Mdl)->ByteOffset)

#define MmGetMdlBaseVa(Mdl) ((Mdl)->StartVa)

/*
 * PPFN_NUMBER
 * MmGetMdlPfnArray(
 *   IN PMDL  Mdl)
 */
#define MmGetMdlPfnArray(_Mdl) \
  ((PPFN_NUMBER) ((_Mdl) + 1))

/*
 * PVOID
 * MmGetMdlVirtualAddress(
 *   IN PMDL  Mdl)
 */
#define MmGetMdlVirtualAddress(_Mdl) \
  ((PVOID) ((PCHAR) ((_Mdl)->StartVa) + (_Mdl)->ByteOffset))

#define MmGetProcedureAddress(Address) (Address)
#define MmLockPagableCodeSection(Address) MmLockPagableDataSection(Address)

/* PVOID MmGetSystemAddressForMdl(
 *     IN PMDL Mdl);
 */
#define MmGetSystemAddressForMdl(Mdl) \
  (((Mdl)->MdlFlags & (MDL_MAPPED_TO_SYSTEM_VA | \
    MDL_SOURCE_IS_NONPAGED_POOL)) ? \
      ((Mdl)->MappedSystemVa) : \
      (MmMapLockedPages((Mdl), KernelMode)))

/* PVOID
 * MmGetSystemAddressForMdlSafe(
 *     IN PMDL Mdl,
 *     IN MM_PAGE_PRIORITY Priority)
 */
#define MmGetSystemAddressForMdlSafe(_Mdl, _Priority) \
  (((_Mdl)->MdlFlags & (MDL_MAPPED_TO_SYSTEM_VA \
    | MDL_SOURCE_IS_NONPAGED_POOL)) ? \
    (_Mdl)->MappedSystemVa : \
    (PVOID) MmMapLockedPagesSpecifyCache((_Mdl), \
      KernelMode, MmCached, NULL, FALSE, (_Priority)))

/*
 * VOID
 * MmInitializeMdl(
 *   IN PMDL  MemoryDescriptorList,
 *   IN PVOID  BaseVa,
 *   IN SIZE_T  Length)
 */
#define MmInitializeMdl(_MemoryDescriptorList, \
                        _BaseVa, \
                        _Length) \
{ \
  (_MemoryDescriptorList)->Next = (PMDL) NULL; \
  (_MemoryDescriptorList)->Size = (CSHORT) (sizeof(MDL) + \
    (sizeof(PFN_NUMBER) * ADDRESS_AND_SIZE_TO_SPAN_PAGES(_BaseVa, _Length))); \
  (_MemoryDescriptorList)->MdlFlags = 0; \
  (_MemoryDescriptorList)->StartVa = (PVOID) PAGE_ALIGN(_BaseVa); \
  (_MemoryDescriptorList)->ByteOffset = BYTE_OFFSET(_BaseVa); \
  (_MemoryDescriptorList)->ByteCount = (ULONG) _Length; \
}

/*
 * VOID
 * MmPrepareMdlForReuse(
 *   IN PMDL  Mdl)
 */
#define MmPrepareMdlForReuse(_Mdl) \
{ \
  if (((_Mdl)->MdlFlags & MDL_PARTIAL_HAS_BEEN_MAPPED) != 0) { \
    ASSERT(((_Mdl)->MdlFlags & MDL_PARTIAL) != 0); \
    MmUnmapLockedPages((_Mdl)->MappedSystemVa, (_Mdl)); \
  } else if (((_Mdl)->MdlFlags & MDL_PARTIAL) == 0) { \
    ASSERT(((_Mdl)->MdlFlags & MDL_MAPPED_TO_SYSTEM_VA) == 0); \
  } \
}

#if (NTDDI_VERSION >= NTDDI_WIN2K)
NTKERNELAPI
PVOID
NTAPI
MmAllocateContiguousMemory(
  IN SIZE_T NumberOfBytes,
  IN PHYSICAL_ADDRESS HighestAcceptableAddress);

NTKERNELAPI
PVOID
NTAPI
MmAllocateContiguousMemorySpecifyCache(
  IN SIZE_T NumberOfBytes,
  IN PHYSICAL_ADDRESS LowestAcceptableAddress,
  IN PHYSICAL_ADDRESS HighestAcceptableAddress,
  IN PHYSICAL_ADDRESS BoundaryAddressMultiple OPTIONAL,
  IN MEMORY_CACHING_TYPE CacheType);

NTKERNELAPI
PMDL
NTAPI
MmAllocatePagesForMdl(
  IN PHYSICAL_ADDRESS LowAddress,
  IN PHYSICAL_ADDRESS HighAddress,
  IN PHYSICAL_ADDRESS SkipBytes,
  IN SIZE_T TotalBytes);

NTKERNELAPI
VOID
NTAPI
MmBuildMdlForNonPagedPool(
  IN OUT PMDLX MemoryDescriptorList);

//DECLSPEC_DEPRECATED_DDK
NTKERNELAPI
PMDL
NTAPI
MmCreateMdl(
  IN PMDL MemoryDescriptorList OPTIONAL,
  IN PVOID Base,
  IN SIZE_T Length);

NTKERNELAPI
VOID
NTAPI
MmFreeContiguousMemory(
  IN PVOID BaseAddress);

NTKERNELAPI
VOID
NTAPI
MmFreeContiguousMemorySpecifyCache(
  IN PVOID BaseAddress,
  IN SIZE_T NumberOfBytes,
  IN MEMORY_CACHING_TYPE CacheType);

NTKERNELAPI
VOID
NTAPI
MmFreePagesFromMdl(
  IN PMDLX MemoryDescriptorList);

NTKERNELAPI
PVOID
NTAPI
MmGetSystemRoutineAddress(
  IN PUNICODE_STRING SystemRoutineName);

NTKERNELAPI
LOGICAL
NTAPI
MmIsDriverVerifying(
  IN struct _DRIVER_OBJECT *DriverObject);

NTKERNELAPI
PVOID
NTAPI
MmLockPagableDataSection(
  IN PVOID AddressWithinSection);

NTKERNELAPI
PVOID
NTAPI
MmMapIoSpace(
  IN PHYSICAL_ADDRESS PhysicalAddress,
  IN SIZE_T NumberOfBytes,
  IN MEMORY_CACHING_TYPE CacheEnable);

NTKERNELAPI
PVOID
NTAPI
MmMapLockedPages(
  IN PMDL MemoryDescriptorList,
  IN KPROCESSOR_MODE AccessMode);

NTKERNELAPI
PVOID
NTAPI
MmMapLockedPagesSpecifyCache(
  IN PMDLX MemoryDescriptorList,
  IN KPROCESSOR_MODE AccessMode,
  IN MEMORY_CACHING_TYPE CacheType,
  IN PVOID BaseAddress OPTIONAL,
  IN ULONG BugCheckOnFailure,
  IN MM_PAGE_PRIORITY Priority);

NTKERNELAPI
PVOID
NTAPI
MmPageEntireDriver(
  IN PVOID AddressWithinSection);

NTKERNELAPI
VOID
NTAPI
MmProbeAndLockPages(
  IN OUT PMDL MemoryDescriptorList,
  IN KPROCESSOR_MODE AccessMode,
  IN LOCK_OPERATION Operation);

NTKERNELAPI
MM_SYSTEMSIZE
NTAPI
MmQuerySystemSize(VOID);

NTKERNELAPI
VOID
NTAPI
MmResetDriverPaging(
  IN PVOID AddressWithinSection);

NTKERNELAPI
SIZE_T
NTAPI
MmSizeOfMdl(
  IN PVOID Base,
  IN SIZE_T Length);

NTKERNELAPI
VOID
NTAPI
MmUnlockPagableImageSection(
  IN PVOID ImageSectionHandle);

NTKERNELAPI
VOID
NTAPI
MmUnlockPages(
  IN OUT PMDL MemoryDescriptorList);

NTKERNELAPI
VOID
NTAPI
MmUnmapIoSpace(
  IN PVOID BaseAddress,
  IN SIZE_T NumberOfBytes);

NTKERNELAPI
VOID
NTAPI
MmProbeAndLockProcessPages(
  IN OUT PMDL MemoryDescriptorList,
  IN PEPROCESS Process,
  IN KPROCESSOR_MODE AccessMode,
  IN LOCK_OPERATION Operation);

NTKERNELAPI
VOID
NTAPI
MmUnmapLockedPages(
  IN PVOID BaseAddress,
  IN PMDL MemoryDescriptorList);

NTKERNELAPI
PVOID
NTAPI
MmAllocateContiguousMemorySpecifyCacheNode(
  IN SIZE_T NumberOfBytes,
  IN PHYSICAL_ADDRESS LowestAcceptableAddress,
  IN PHYSICAL_ADDRESS HighestAcceptableAddress,
  IN PHYSICAL_ADDRESS BoundaryAddressMultiple OPTIONAL,
  IN MEMORY_CACHING_TYPE CacheType,
  IN NODE_REQUIREMENT PreferredNode);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_WINXP)

NTKERNELAPI
NTSTATUS
NTAPI
MmAdvanceMdl(
  IN OUT PMDL Mdl,
  IN ULONG NumberOfBytes);

NTKERNELAPI
PVOID
NTAPI
MmAllocateMappingAddress(
  IN SIZE_T NumberOfBytes,
  IN ULONG PoolTag);

NTKERNELAPI
VOID
NTAPI
MmFreeMappingAddress(
  IN PVOID BaseAddress,
  IN ULONG PoolTag);

NTKERNELAPI
NTSTATUS
NTAPI
MmIsVerifierEnabled(
  OUT PULONG VerifierFlags);

NTKERNELAPI
PVOID
NTAPI
MmMapLockedPagesWithReservedMapping(
  IN PVOID MappingAddress,
  IN ULONG PoolTag,
  IN PMDL MemoryDescriptorList,
  IN MEMORY_CACHING_TYPE CacheType);

NTKERNELAPI
NTSTATUS
NTAPI
MmProtectMdlSystemAddress(
  IN PMDL MemoryDescriptorList,
  IN ULONG NewProtect);

NTKERNELAPI
VOID
NTAPI
MmUnmapReservedMapping(
  IN PVOID BaseAddress,
  IN ULONG PoolTag,
  IN PMDL MemoryDescriptorList);

NTKERNELAPI
NTSTATUS
NTAPI
MmAddVerifierThunks(
  IN PVOID ThunkBuffer,
  IN ULONG ThunkBufferSize);

#endif /* (NTDDI_VERSION >= NTDDI_WINXP) */

#if (NTDDI_VERSION >= NTDDI_WS03)
NTKERNELAPI
LOGICAL
NTAPI
MmIsIoSpaceActive(
  IN PHYSICAL_ADDRESS StartAddress,
  IN SIZE_T NumberOfBytes);

#endif /* (NTDDI_VERSION >= NTDDI_WS03) */
#if (NTDDI_VERSION >= NTDDI_WS03SP1)
NTKERNELAPI
PMDL
NTAPI
MmAllocatePagesForMdlEx(
  IN PHYSICAL_ADDRESS LowAddress,
  IN PHYSICAL_ADDRESS HighAddress,
  IN PHYSICAL_ADDRESS SkipBytes,
  IN SIZE_T TotalBytes,
  IN MEMORY_CACHING_TYPE CacheType,
  IN ULONG Flags);
#endif

#if (NTDDI_VERSION >= NTDDI_VISTA)
NTKERNELAPI
LOGICAL
NTAPI
MmIsDriverVerifyingByAddress(
  IN PVOID AddressWithinSection);
#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

/******************************************************************************
 *                            Security Manager Functions                      *
 ******************************************************************************/

#if (NTDDI_VERSION >= NTDDI_WIN2K)
NTKERNELAPI
BOOLEAN
NTAPI
SeAccessCheck(
  IN PSECURITY_DESCRIPTOR SecurityDescriptor,
  IN PSECURITY_SUBJECT_CONTEXT SubjectSecurityContext,
  IN BOOLEAN SubjectContextLocked,
  IN ACCESS_MASK DesiredAccess,
  IN ACCESS_MASK PreviouslyGrantedAccess,
  OUT PPRIVILEGE_SET *Privileges OPTIONAL,
  IN PGENERIC_MAPPING GenericMapping,
  IN KPROCESSOR_MODE AccessMode,
  OUT PACCESS_MASK GrantedAccess,
  OUT PNTSTATUS AccessStatus);

NTKERNELAPI
NTSTATUS
NTAPI
SeAssignSecurity(
  IN PSECURITY_DESCRIPTOR ParentDescriptor OPTIONAL,
  IN PSECURITY_DESCRIPTOR ExplicitDescriptor OPTIONAL,
  OUT PSECURITY_DESCRIPTOR *NewDescriptor,
  IN BOOLEAN IsDirectoryObject,
  IN PSECURITY_SUBJECT_CONTEXT SubjectContext,
  IN PGENERIC_MAPPING GenericMapping,
  IN POOL_TYPE PoolType);

NTKERNELAPI
NTSTATUS
NTAPI
SeAssignSecurityEx(
  IN PSECURITY_DESCRIPTOR ParentDescriptor OPTIONAL,
  IN PSECURITY_DESCRIPTOR ExplicitDescriptor OPTIONAL,
  OUT PSECURITY_DESCRIPTOR *NewDescriptor,
  IN GUID *ObjectType OPTIONAL,
  IN BOOLEAN IsDirectoryObject,
  IN ULONG AutoInheritFlags,
  IN PSECURITY_SUBJECT_CONTEXT SubjectContext,
  IN PGENERIC_MAPPING GenericMapping,
  IN POOL_TYPE PoolType);

NTKERNELAPI
NTSTATUS
NTAPI
SeDeassignSecurity(
  IN OUT PSECURITY_DESCRIPTOR *SecurityDescriptor);

NTKERNELAPI
BOOLEAN
NTAPI
SeValidSecurityDescriptor(
  IN ULONG Length,
  IN PSECURITY_DESCRIPTOR SecurityDescriptor);

NTKERNELAPI
ULONG
NTAPI
SeObjectCreateSaclAccessBits(
  IN PSECURITY_DESCRIPTOR SecurityDescriptor);

NTKERNELAPI
VOID
NTAPI
SeReleaseSubjectContext(
  IN OUT PSECURITY_SUBJECT_CONTEXT SubjectContext);

NTKERNELAPI
VOID
NTAPI
SeUnlockSubjectContext(
  IN PSECURITY_SUBJECT_CONTEXT SubjectContext);

NTKERNELAPI
VOID
NTAPI
SeCaptureSubjectContext(
  OUT PSECURITY_SUBJECT_CONTEXT SubjectContext);

NTKERNELAPI
VOID
NTAPI
SeLockSubjectContext(
  IN PSECURITY_SUBJECT_CONTEXT SubjectContext);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_WS03SP1)

NTSTATUS
NTAPI
SeSetAuditParameter(
  IN OUT PSE_ADT_PARAMETER_ARRAY AuditParameters,
  IN SE_ADT_PARAMETER_TYPE Type,
  IN ULONG Index,
  IN PVOID Data);

NTSTATUS
NTAPI
SeReportSecurityEvent(
  IN ULONG Flags,
  IN PUNICODE_STRING SourceName,
  IN PSID UserSid OPTIONAL,
  IN PSE_ADT_PARAMETER_ARRAY AuditParameters);

#endif /* (NTDDI_VERSION >= NTDDI_WS03SP1) */

#if (NTDDI_VERSION >= NTDDI_VISTA)
NTKERNELAPI
ULONG
NTAPI
SeComputeAutoInheritByObjectType(
  IN PVOID ObjectType,
  IN PSECURITY_DESCRIPTOR SecurityDescriptor OPTIONAL,
  IN PSECURITY_DESCRIPTOR ParentSecurityDescriptor OPTIONAL);

#ifdef SE_NTFS_WORLD_CACHE
VOID
NTAPI
SeGetWorldRights(
  IN PSECURITY_DESCRIPTOR SecurityDescriptor,
  IN PGENERIC_MAPPING GenericMapping,
  OUT PACCESS_MASK GrantedAccess);
#endif /* SE_NTFS_WORLD_CACHE */
#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

/******************************************************************************
 *                         Configuration Manager Functions                    *
 ******************************************************************************/

#if (NTDDI_VERSION >= NTDDI_WINXP)
NTKERNELAPI
NTSTATUS
NTAPI
CmRegisterCallback(
  IN PEX_CALLBACK_FUNCTION Function,
  IN PVOID Context OPTIONAL,
  OUT PLARGE_INTEGER Cookie);

NTKERNELAPI
NTSTATUS
NTAPI
CmUnRegisterCallback(
  IN LARGE_INTEGER Cookie);
#endif

#if (NTDDI_VERSION >= NTDDI_VISTA)

NTKERNELAPI
NTSTATUS
NTAPI
CmRegisterCallbackEx(
  PEX_CALLBACK_FUNCTION Function,
  PCUNICODE_STRING Altitude,
  PVOID Driver,
  PVOID Context,
  PLARGE_INTEGER Cookie,
  PVOID Reserved);

NTKERNELAPI
VOID
NTAPI
CmGetCallbackVersion(
  OUT PULONG Major OPTIONAL,
  OUT PULONG Minor OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
CmSetCallbackObjectContext(
  IN OUT PVOID Object,
  IN PLARGE_INTEGER Cookie,
  IN PVOID NewContext,
  OUT PVOID *OldContext OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
CmCallbackGetKeyObjectID(
  IN PLARGE_INTEGER Cookie,
  IN PVOID Object,
  OUT PULONG_PTR ObjectID OPTIONAL,
  OUT PCUNICODE_STRING *ObjectName OPTIONAL);

NTKERNELAPI
PVOID
NTAPI
CmGetBoundTransaction(
  IN PLARGE_INTEGER Cookie,
  IN PVOID Object);

#endif // NTDDI_VERSION >= NTDDI_VISTA


/******************************************************************************
 *                         I/O Manager Functions                              *
 ******************************************************************************/

/*
 * NTSTATUS
 * IoAcquireRemoveLock(
 *   IN PIO_REMOVE_LOCK  RemoveLock,
 *   IN OPTIONAL PVOID  Tag)
 */
#if DBG
#define IoAcquireRemoveLock(RemoveLock, Tag) \
  IoAcquireRemoveLockEx(RemoveLock, Tag, __FILE__, __LINE__, sizeof (IO_REMOVE_LOCK))
#else
#define IoAcquireRemoveLock(RemoveLock, Tag) \
  IoAcquireRemoveLockEx(RemoveLock, Tag, "", 1, sizeof (IO_REMOVE_LOCK))
#endif

/*
 * VOID
 * IoAdjustPagingPathCount(
 *   IN PLONG  Count,
 *   IN BOOLEAN  Increment)
 */
#define IoAdjustPagingPathCount(_Count, \
                                _Increment) \
{ \
  if (_Increment) \
    { \
      InterlockedIncrement(_Count); \
    } \
  else \
    { \
      InterlockedDecrement(_Count); \
    } \
}

#if !defined(_M_AMD64)
NTHALAPI
VOID
NTAPI
READ_PORT_BUFFER_UCHAR(
  IN PUCHAR Port,
  IN PUCHAR Buffer,
  IN ULONG Count);

NTHALAPI
VOID
NTAPI
READ_PORT_BUFFER_ULONG(
  IN PULONG Port,
  IN PULONG Buffer,
  IN ULONG Count);

NTHALAPI
VOID
NTAPI
READ_PORT_BUFFER_USHORT(
  IN PUSHORT Port,
  IN PUSHORT Buffer,
  IN ULONG Count);

NTHALAPI
UCHAR
NTAPI
READ_PORT_UCHAR(
  IN PUCHAR Port);

NTHALAPI
ULONG
NTAPI
READ_PORT_ULONG(
  IN PULONG Port);

NTHALAPI
USHORT
NTAPI
READ_PORT_USHORT(
  IN PUSHORT Port);

NTKERNELAPI
VOID
NTAPI
READ_REGISTER_BUFFER_UCHAR(
  IN PUCHAR Register,
  IN PUCHAR Buffer,
  IN ULONG Count);

NTKERNELAPI
VOID
NTAPI
READ_REGISTER_BUFFER_ULONG(
  IN PULONG Register,
  IN PULONG Buffer,
  IN ULONG Count);

NTKERNELAPI
VOID
NTAPI
READ_REGISTER_BUFFER_USHORT(
  IN PUSHORT Register,
  IN PUSHORT Buffer,
  IN ULONG Count);

NTKERNELAPI
UCHAR
NTAPI
READ_REGISTER_UCHAR(
  IN PUCHAR Register);

NTKERNELAPI
ULONG
NTAPI
READ_REGISTER_ULONG(
  IN PULONG Register);

NTKERNELAPI
USHORT
NTAPI
READ_REGISTER_USHORT(
  IN PUSHORT Register);

NTHALAPI
VOID
NTAPI
WRITE_PORT_BUFFER_UCHAR(
  IN PUCHAR Port,
  IN PUCHAR Buffer,
  IN ULONG Count);

NTHALAPI
VOID
NTAPI
WRITE_PORT_BUFFER_ULONG(
  IN PULONG Port,
  IN PULONG Buffer,
  IN ULONG Count);

NTHALAPI
VOID
NTAPI
WRITE_PORT_BUFFER_USHORT(
  IN PUSHORT Port,
  IN PUSHORT Buffer,
  IN ULONG Count);

NTHALAPI
VOID
NTAPI
WRITE_PORT_UCHAR(
  IN PUCHAR Port,
  IN UCHAR Value);

NTHALAPI
VOID
NTAPI
WRITE_PORT_ULONG(
  IN PULONG Port,
  IN ULONG Value);

NTHALAPI
VOID
NTAPI
WRITE_PORT_USHORT(
  IN PUSHORT Port,
  IN USHORT Value);

NTKERNELAPI
VOID
NTAPI
WRITE_REGISTER_BUFFER_UCHAR(
  IN PUCHAR Register,
  IN PUCHAR Buffer,
  IN ULONG Count);

NTKERNELAPI
VOID
NTAPI
WRITE_REGISTER_BUFFER_ULONG(
  IN PULONG Register,
  IN PULONG Buffer,
  IN ULONG Count);

NTKERNELAPI
VOID
NTAPI
WRITE_REGISTER_BUFFER_USHORT(
  IN PUSHORT Register,
  IN PUSHORT Buffer,
  IN ULONG Count);

NTKERNELAPI
VOID
NTAPI
WRITE_REGISTER_UCHAR(
  IN PUCHAR Register,
  IN UCHAR Value);

NTKERNELAPI
VOID
NTAPI
WRITE_REGISTER_ULONG(
  IN PULONG Register,
  IN ULONG Value);

NTKERNELAPI
VOID
NTAPI
WRITE_REGISTER_USHORT(
  IN PUSHORT Register,
  IN USHORT Value);

#else

FORCEINLINE
VOID
READ_PORT_BUFFER_UCHAR(
  IN PUCHAR Port,
  IN PUCHAR Buffer,
  IN ULONG Count)
{
  __inbytestring((USHORT)(ULONG_PTR)Port, Buffer, Count);
}

FORCEINLINE
VOID
READ_PORT_BUFFER_ULONG(
  IN PULONG Port,
  IN PULONG Buffer,
  IN ULONG Count)
{
  __indwordstring((USHORT)(ULONG_PTR)Port, Buffer, Count);
}

FORCEINLINE
VOID
READ_PORT_BUFFER_USHORT(
  IN PUSHORT Port,
  IN PUSHORT Buffer,
  IN ULONG Count)
{
  __inwordstring((USHORT)(ULONG_PTR)Port, Buffer, Count);
}

FORCEINLINE
UCHAR
READ_PORT_UCHAR(
  IN PUCHAR Port)
{
  return __inbyte((USHORT)(ULONG_PTR)Port);
}

FORCEINLINE
ULONG
READ_PORT_ULONG(
  IN PULONG Port)
{
  return __indword((USHORT)(ULONG_PTR)Port);
}

FORCEINLINE
USHORT
READ_PORT_USHORT(
  IN PUSHORT Port)
{
  return __inword((USHORT)(ULONG_PTR)Port);
}

FORCEINLINE
VOID
READ_REGISTER_BUFFER_UCHAR(
  IN PUCHAR Register,
  IN PUCHAR Buffer,
  IN ULONG Count)
{
  __movsb(Register, Buffer, Count);
}

FORCEINLINE
VOID
READ_REGISTER_BUFFER_ULONG(
  IN PULONG Register,
  IN PULONG Buffer,
  IN ULONG Count)
{
  __movsd(Register, Buffer, Count);
}

FORCEINLINE
VOID
READ_REGISTER_BUFFER_USHORT(
  IN PUSHORT Register,
  IN PUSHORT Buffer,
  IN ULONG Count)
{
  __movsw(Register, Buffer, Count);
}

FORCEINLINE
UCHAR
READ_REGISTER_UCHAR(
  IN volatile UCHAR *Register)
{
  return *Register;
}

FORCEINLINE
ULONG
READ_REGISTER_ULONG(
  IN volatile ULONG *Register)
{
  return *Register;
}

FORCEINLINE
USHORT
READ_REGISTER_USHORT(
  IN volatile USHORT *Register)
{
  return *Register;
}

FORCEINLINE
VOID
WRITE_PORT_BUFFER_UCHAR(
  IN PUCHAR Port,
  IN PUCHAR Buffer,
  IN ULONG Count)
{
  __outbytestring((USHORT)(ULONG_PTR)Port, Buffer, Count);
}

FORCEINLINE
VOID
WRITE_PORT_BUFFER_ULONG(
  IN PULONG Port,
  IN PULONG Buffer,
  IN ULONG Count)
{
  __outdwordstring((USHORT)(ULONG_PTR)Port, Buffer, Count);
}

FORCEINLINE
VOID
WRITE_PORT_BUFFER_USHORT(
  IN PUSHORT Port,
  IN PUSHORT Buffer,
  IN ULONG Count)
{
  __outwordstring((USHORT)(ULONG_PTR)Port, Buffer, Count);
}

FORCEINLINE
VOID
WRITE_PORT_UCHAR(
  IN PUCHAR Port,
  IN UCHAR Value)
{
  __outbyte((USHORT)(ULONG_PTR)Port, Value);
}

FORCEINLINE
VOID
WRITE_PORT_ULONG(
  IN PULONG Port,
  IN ULONG Value)
{
  __outdword((USHORT)(ULONG_PTR)Port, Value);
}

FORCEINLINE
VOID
WRITE_PORT_USHORT(
  IN PUSHORT Port,
  IN USHORT Value)
{
  __outword((USHORT)(ULONG_PTR)Port, Value);
}

FORCEINLINE
VOID
WRITE_REGISTER_BUFFER_UCHAR(
  IN PUCHAR Register,
  IN PUCHAR Buffer,
  IN ULONG Count)
{
  LONG Synch;
  __movsb(Register, Buffer, Count);
  InterlockedOr(&Synch, 1);
}

FORCEINLINE
VOID
WRITE_REGISTER_BUFFER_ULONG(
  IN PULONG Register,
  IN PULONG Buffer,
  IN ULONG Count)
{
  LONG Synch;
  __movsd(Register, Buffer, Count);
  InterlockedOr(&Synch, 1);
}

FORCEINLINE
VOID
WRITE_REGISTER_BUFFER_USHORT(
  IN PUSHORT Register,
  IN PUSHORT Buffer,
  IN ULONG Count)
{
  LONG Synch;
  __movsw(Register, Buffer, Count);
  InterlockedOr(&Synch, 1);
}

FORCEINLINE
VOID
WRITE_REGISTER_UCHAR(
  IN volatile UCHAR *Register,
  IN UCHAR Value)
{
  LONG Synch;
  *Register = Value;
  InterlockedOr(&Synch, 1);
}

FORCEINLINE
VOID
WRITE_REGISTER_ULONG(
  IN volatile ULONG *Register,
  IN ULONG Value)
{
  LONG Synch;
  *Register = Value;
  InterlockedOr(&Synch, 1);
}

FORCEINLINE
VOID
WRITE_REGISTER_USHORT(
  IN volatile USHORT *Register,
  IN USHORT Value)
{
  LONG Sync;
  *Register = Value;
  InterlockedOr(&Sync, 1);
}
#endif

#if defined(USE_DMA_MACROS) && !defined(_NTHAL_) && \
   (defined(_NTDDK_) || defined(_NTDRIVER_)) || defined(_WDM_INCLUDED_)

#define DMA_MACROS_DEFINED

FORCEINLINE
NTSTATUS
IoAllocateAdapterChannel(
  IN PDMA_ADAPTER DmaAdapter,
  IN PDEVICE_OBJECT DeviceObject,
  IN ULONG NumberOfMapRegisters,
  IN PDRIVER_CONTROL ExecutionRoutine,
  IN PVOID Context)
{
  PALLOCATE_ADAPTER_CHANNEL AllocateAdapterChannel;
  AllocateAdapterChannel =
      *(DmaAdapter)->DmaOperations->AllocateAdapterChannel;
  ASSERT(AllocateAdapterChannel);
  return AllocateAdapterChannel(DmaAdapter,
                                DeviceObject,
                                NumberOfMapRegisters,
                                ExecutionRoutine,
                                Context );
}

FORCEINLINE
BOOLEAN
NTAPI
IoFlushAdapterBuffers(
  IN PDMA_ADAPTER DmaAdapter,
  IN PMDL Mdl,
  IN PVOID MapRegisterBase,
  IN PVOID CurrentVa,
  IN ULONG Length,
  IN BOOLEAN WriteToDevice)
{
  PFLUSH_ADAPTER_BUFFERS FlushAdapterBuffers;
  FlushAdapterBuffers = *(DmaAdapter)->DmaOperations->FlushAdapterBuffers;
  ASSERT(FlushAdapterBuffers);
  return FlushAdapterBuffers(DmaAdapter,
                             Mdl,
                             MapRegisterBase,
                             CurrentVa,
                             Length,
                             WriteToDevice);
}

FORCEINLINE
VOID
NTAPI
IoFreeAdapterChannel(
  IN PDMA_ADAPTER DmaAdapter)
{
  PFREE_ADAPTER_CHANNEL FreeAdapterChannel;
  FreeAdapterChannel = *(DmaAdapter)->DmaOperations->FreeAdapterChannel;
  ASSERT(FreeAdapterChannel);
  FreeAdapterChannel(DmaAdapter);
}

FORCEINLINE
VOID
NTAPI
IoFreeMapRegisters(
  IN PDMA_ADAPTER DmaAdapter,
  IN PVOID MapRegisterBase,
  IN ULONG NumberOfMapRegisters)
{
  PFREE_MAP_REGISTERS FreeMapRegisters;
  FreeMapRegisters = *(DmaAdapter)->DmaOperations->FreeMapRegisters;
  ASSERT(FreeMapRegisters);
  FreeMapRegisters(DmaAdapter, MapRegisterBase, NumberOfMapRegisters);
}

FORCEINLINE
PHYSICAL_ADDRESS
NTAPI
IoMapTransfer(
  IN PDMA_ADAPTER DmaAdapter,
  IN PMDL Mdl,
  IN PVOID MapRegisterBase,
  IN PVOID CurrentVa,
  IN OUT PULONG Length,
  IN BOOLEAN WriteToDevice)
{
  PMAP_TRANSFER MapTransfer;

  MapTransfer = *(DmaAdapter)->DmaOperations->MapTransfer;
  ASSERT(MapTransfer);
  return MapTransfer(DmaAdapter,
                     Mdl,
                     MapRegisterBase,
                     CurrentVa,
                     Length,
                     WriteToDevice);
}
#endif

#if (NTDDI_VERSION >= NTDDI_WIN2K)

NTKERNELAPI
VOID
NTAPI
IoAcquireCancelSpinLock(
  OUT PKIRQL Irql);

NTKERNELAPI
NTSTATUS
NTAPI
IoAcquireRemoveLockEx(
  IN PIO_REMOVE_LOCK RemoveLock,
  IN PVOID Tag OPTIONAL,
  IN PCSTR File,
  IN ULONG Line,
  IN ULONG RemlockSize);
NTKERNELAPI
NTSTATUS
NTAPI
IoAllocateDriverObjectExtension(
  IN PDRIVER_OBJECT DriverObject,
  IN PVOID ClientIdentificationAddress,
  IN ULONG DriverObjectExtensionSize,
  OUT PVOID *DriverObjectExtension);

NTKERNELAPI
PVOID
NTAPI
IoAllocateErrorLogEntry(
  IN PVOID IoObject,
  IN UCHAR EntrySize);

NTKERNELAPI
PIRP
NTAPI
IoAllocateIrp(
  IN CCHAR StackSize,
  IN BOOLEAN ChargeQuota);

NTKERNELAPI
PMDL
NTAPI
IoAllocateMdl(
  IN PVOID VirtualAddress OPTIONAL,
  IN ULONG Length,
  IN BOOLEAN SecondaryBuffer,
  IN BOOLEAN ChargeQuota,
  IN OUT PIRP Irp OPTIONAL);

NTKERNELAPI
PIO_WORKITEM
NTAPI
IoAllocateWorkItem(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoAttachDevice(
  IN PDEVICE_OBJECT SourceDevice,
  IN PUNICODE_STRING TargetDevice,
  OUT PDEVICE_OBJECT *AttachedDevice);

NTKERNELAPI
PDEVICE_OBJECT
NTAPI
IoAttachDeviceToDeviceStack(
  IN PDEVICE_OBJECT SourceDevice,
  IN PDEVICE_OBJECT TargetDevice);

NTKERNELAPI
PIRP
NTAPI
IoBuildAsynchronousFsdRequest(
  IN ULONG MajorFunction,
  IN PDEVICE_OBJECT DeviceObject,
  IN OUT PVOID Buffer OPTIONAL,
  IN ULONG Length OPTIONAL,
  IN PLARGE_INTEGER StartingOffset OPTIONAL,
  IN PIO_STATUS_BLOCK IoStatusBlock OPTIONAL);

NTKERNELAPI
PIRP
NTAPI
IoBuildDeviceIoControlRequest(
  IN ULONG IoControlCode,
  IN PDEVICE_OBJECT DeviceObject,
  IN PVOID InputBuffer OPTIONAL,
  IN ULONG InputBufferLength,
  OUT PVOID OutputBuffer OPTIONAL,
  IN ULONG OutputBufferLength,
  IN BOOLEAN InternalDeviceIoControl,
  IN PKEVENT Event,
  OUT PIO_STATUS_BLOCK IoStatusBlock);

NTKERNELAPI
VOID
NTAPI
IoBuildPartialMdl(
  IN PMDL SourceMdl,
  IN OUT PMDL TargetMdl,
  IN PVOID VirtualAddress,
  IN ULONG Length);

NTKERNELAPI
PIRP
NTAPI
IoBuildSynchronousFsdRequest(
  IN ULONG MajorFunction,
  IN PDEVICE_OBJECT DeviceObject,
  IN OUT PVOID Buffer OPTIONAL,
  IN ULONG Length OPTIONAL,
  IN PLARGE_INTEGER StartingOffset OPTIONAL,
  IN PKEVENT Event,
  OUT PIO_STATUS_BLOCK IoStatusBlock);

NTKERNELAPI
NTSTATUS
FASTCALL
IofCallDriver(
  IN PDEVICE_OBJECT DeviceObject,
  IN OUT PIRP Irp);
#define IoCallDriver IofCallDriver

NTKERNELAPI
VOID
FASTCALL
IofCompleteRequest(
  IN PIRP Irp,
  IN CCHAR PriorityBoost);
#define IoCompleteRequest IofCompleteRequest

NTKERNELAPI
BOOLEAN
NTAPI
IoCancelIrp(
  IN PIRP Irp);

NTKERNELAPI
NTSTATUS
NTAPI
IoCheckShareAccess(
  IN ACCESS_MASK DesiredAccess,
  IN ULONG DesiredShareAccess,
  IN OUT PFILE_OBJECT FileObject,
  IN OUT PSHARE_ACCESS ShareAccess,
  IN BOOLEAN Update);

NTKERNELAPI
VOID
FASTCALL
IofCompleteRequest(
  IN PIRP Irp,
  IN CCHAR PriorityBoost);

NTKERNELAPI
NTSTATUS
NTAPI
IoConnectInterrupt(
  OUT PKINTERRUPT *InterruptObject,
  IN PKSERVICE_ROUTINE ServiceRoutine,
  IN PVOID ServiceContext OPTIONAL,
  IN PKSPIN_LOCK SpinLock OPTIONAL,
  IN ULONG Vector,
  IN KIRQL Irql,
  IN KIRQL SynchronizeIrql,
  IN KINTERRUPT_MODE InterruptMode,
  IN BOOLEAN ShareVector,
  IN KAFFINITY ProcessorEnableMask,
  IN BOOLEAN FloatingSave);

NTKERNELAPI
NTSTATUS
NTAPI
IoCreateDevice(
  IN PDRIVER_OBJECT DriverObject,
  IN ULONG DeviceExtensionSize,
  IN PUNICODE_STRING DeviceName OPTIONAL,
  IN DEVICE_TYPE DeviceType,
  IN ULONG DeviceCharacteristics,
  IN BOOLEAN Exclusive,
  OUT PDEVICE_OBJECT *DeviceObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoCreateFile(
  OUT PHANDLE FileHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  IN PLARGE_INTEGER AllocationSize OPTIONAL,
  IN ULONG FileAttributes,
  IN ULONG ShareAccess,
  IN ULONG Disposition,
  IN ULONG CreateOptions,
  IN PVOID EaBuffer OPTIONAL,
  IN ULONG EaLength,
  IN CREATE_FILE_TYPE CreateFileType,
  IN PVOID InternalParameters OPTIONAL,
  IN ULONG Options);

NTKERNELAPI
PKEVENT
NTAPI
IoCreateNotificationEvent(
  IN PUNICODE_STRING EventName,
  OUT PHANDLE EventHandle);

NTKERNELAPI
NTSTATUS
NTAPI
IoCreateSymbolicLink(
  IN PUNICODE_STRING SymbolicLinkName,
  IN PUNICODE_STRING DeviceName);

NTKERNELAPI
PKEVENT
NTAPI
IoCreateSynchronizationEvent(
  IN PUNICODE_STRING EventName,
  OUT PHANDLE EventHandle);

NTKERNELAPI
NTSTATUS
NTAPI
IoCreateUnprotectedSymbolicLink(
  IN PUNICODE_STRING SymbolicLinkName,
  IN PUNICODE_STRING DeviceName);

NTKERNELAPI
VOID
NTAPI
IoDeleteDevice(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoDeleteSymbolicLink(
  IN PUNICODE_STRING SymbolicLinkName);

NTKERNELAPI
VOID
NTAPI
IoDetachDevice(
  IN OUT PDEVICE_OBJECT TargetDevice);

NTKERNELAPI
VOID
NTAPI
IoDisconnectInterrupt(
  IN PKINTERRUPT InterruptObject);

NTKERNELAPI
VOID
NTAPI
IoFreeIrp(
  IN PIRP Irp);

NTKERNELAPI
VOID
NTAPI
IoFreeMdl(
  IN PMDL Mdl);

NTKERNELAPI
VOID
NTAPI
IoFreeWorkItem(
  IN PIO_WORKITEM IoWorkItem);

NTKERNELAPI
PDEVICE_OBJECT
NTAPI
IoGetAttachedDevice(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
PDEVICE_OBJECT
NTAPI
IoGetAttachedDeviceReference(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetBootDiskInformation(
  IN OUT PBOOTDISK_INFORMATION BootDiskInformation,
  IN ULONG Size);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetDeviceInterfaceAlias(
  IN PUNICODE_STRING SymbolicLinkName,
  IN CONST GUID *AliasInterfaceClassGuid,
  OUT PUNICODE_STRING AliasSymbolicLinkName);

NTKERNELAPI
PEPROCESS
NTAPI
IoGetCurrentProcess(VOID);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetDeviceInterfaces(
  IN CONST GUID *InterfaceClassGuid,
  IN PDEVICE_OBJECT PhysicalDeviceObject OPTIONAL,
  IN ULONG Flags,
  OUT PWSTR *SymbolicLinkList);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetDeviceObjectPointer(
  IN PUNICODE_STRING ObjectName,
  IN ACCESS_MASK DesiredAccess,
  OUT PFILE_OBJECT *FileObject,
  OUT PDEVICE_OBJECT *DeviceObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetDeviceProperty(
  IN PDEVICE_OBJECT DeviceObject,
  IN DEVICE_REGISTRY_PROPERTY DeviceProperty,
  IN ULONG BufferLength,
  OUT PVOID PropertyBuffer,
  OUT PULONG ResultLength);

NTKERNELAPI
PDMA_ADAPTER
NTAPI
IoGetDmaAdapter(
  IN PDEVICE_OBJECT PhysicalDeviceObject OPTIONAL,
  IN PDEVICE_DESCRIPTION DeviceDescription,
  IN OUT PULONG NumberOfMapRegisters);

NTKERNELAPI
PVOID
NTAPI
IoGetDriverObjectExtension(
  IN PDRIVER_OBJECT DriverObject,
  IN PVOID ClientIdentificationAddress);

NTKERNELAPI
PVOID
NTAPI
IoGetInitialStack(VOID);

NTKERNELAPI
PDEVICE_OBJECT
NTAPI
IoGetRelatedDeviceObject(
  IN PFILE_OBJECT FileObject);

NTKERNELAPI
VOID
NTAPI
IoQueueWorkItem(
  IN PIO_WORKITEM IoWorkItem,
  IN PIO_WORKITEM_ROUTINE WorkerRoutine,
  IN WORK_QUEUE_TYPE QueueType,
  IN PVOID Context OPTIONAL);

NTKERNELAPI
VOID
NTAPI
IoInitializeIrp(
  IN OUT PIRP Irp,
  IN USHORT PacketSize,
  IN CCHAR StackSize);

NTKERNELAPI
VOID
NTAPI
IoInitializeRemoveLockEx(
  IN PIO_REMOVE_LOCK Lock,
  IN ULONG AllocateTag,
  IN ULONG MaxLockedMinutes,
  IN ULONG HighWatermark,
  IN ULONG RemlockSize);

NTKERNELAPI
NTSTATUS
NTAPI
IoInitializeTimer(
  IN PDEVICE_OBJECT DeviceObject,
  IN PIO_TIMER_ROUTINE TimerRoutine,
  IN PVOID Context OPTIONAL);

NTKERNELAPI
VOID
NTAPI
IoInvalidateDeviceRelations(
  IN PDEVICE_OBJECT DeviceObject,
  IN DEVICE_RELATION_TYPE Type);

NTKERNELAPI
VOID
NTAPI
IoInvalidateDeviceState(
  IN PDEVICE_OBJECT PhysicalDeviceObject);

NTKERNELAPI
BOOLEAN
NTAPI
IoIsWdmVersionAvailable(
  IN UCHAR MajorVersion,
  IN UCHAR MinorVersion);

NTKERNELAPI
NTSTATUS
NTAPI
IoOpenDeviceInterfaceRegistryKey(
  IN PUNICODE_STRING SymbolicLinkName,
  IN ACCESS_MASK DesiredAccess,
  OUT PHANDLE DeviceInterfaceKey);

NTKERNELAPI
NTSTATUS
NTAPI
IoOpenDeviceRegistryKey(
  IN PDEVICE_OBJECT DeviceObject,
  IN ULONG DevInstKeyType,
  IN ACCESS_MASK DesiredAccess,
  OUT PHANDLE DevInstRegKey);

NTKERNELAPI
NTSTATUS
NTAPI
IoRegisterDeviceInterface(
  IN PDEVICE_OBJECT PhysicalDeviceObject,
  IN CONST GUID *InterfaceClassGuid,
  IN PUNICODE_STRING ReferenceString OPTIONAL,
  OUT PUNICODE_STRING SymbolicLinkName);

NTKERNELAPI
NTSTATUS
NTAPI
IoRegisterPlugPlayNotification(
  IN IO_NOTIFICATION_EVENT_CATEGORY EventCategory,
  IN ULONG EventCategoryFlags,
  IN PVOID EventCategoryData OPTIONAL,
  IN PDRIVER_OBJECT DriverObject,
  IN PDRIVER_NOTIFICATION_CALLBACK_ROUTINE CallbackRoutine,
  IN OUT PVOID Context OPTIONAL,
  OUT PVOID *NotificationEntry);

NTKERNELAPI
NTSTATUS
NTAPI
IoRegisterShutdownNotification(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
VOID
NTAPI
IoReleaseCancelSpinLock(
  IN KIRQL Irql);

NTKERNELAPI
VOID
NTAPI
IoReleaseRemoveLockAndWaitEx(
  IN PIO_REMOVE_LOCK RemoveLock,
  IN PVOID Tag OPTIONAL,
  IN ULONG RemlockSize);

NTKERNELAPI
VOID
NTAPI
IoReleaseRemoveLockEx(
  IN PIO_REMOVE_LOCK RemoveLock,
  IN PVOID Tag OPTIONAL,
  IN ULONG RemlockSize);

NTKERNELAPI
VOID
NTAPI
IoRemoveShareAccess(
  IN PFILE_OBJECT FileObject,
  IN OUT PSHARE_ACCESS ShareAccess);

NTKERNELAPI
NTSTATUS
NTAPI
IoReportTargetDeviceChange(
  IN PDEVICE_OBJECT PhysicalDeviceObject,
  IN PVOID NotificationStructure);

NTKERNELAPI
NTSTATUS
NTAPI
IoReportTargetDeviceChangeAsynchronous(
  IN PDEVICE_OBJECT PhysicalDeviceObject,
  IN PVOID NotificationStructure,
  IN PDEVICE_CHANGE_COMPLETE_CALLBACK Callback OPTIONAL,
  IN PVOID Context OPTIONAL);

NTKERNELAPI
VOID
NTAPI
IoRequestDeviceEject(
  IN PDEVICE_OBJECT PhysicalDeviceObject);

NTKERNELAPI
VOID
NTAPI
IoReuseIrp(
  IN OUT PIRP Irp,
  IN NTSTATUS Status);

NTKERNELAPI
NTSTATUS
NTAPI
IoSetDeviceInterfaceState(
  IN PUNICODE_STRING SymbolicLinkName,
  IN BOOLEAN Enable);

NTKERNELAPI
VOID
NTAPI
IoSetShareAccess(
  IN ACCESS_MASK DesiredAccess,
  IN ULONG DesiredShareAccess,
  IN OUT PFILE_OBJECT FileObject,
  OUT PSHARE_ACCESS ShareAccess);

NTKERNELAPI
VOID
NTAPI
IoStartNextPacket(
  IN PDEVICE_OBJECT DeviceObject,
  IN BOOLEAN Cancelable);

NTKERNELAPI
VOID
NTAPI
IoStartNextPacketByKey(
  IN PDEVICE_OBJECT DeviceObject,
  IN BOOLEAN Cancelable,
  IN ULONG Key);

NTKERNELAPI
VOID
NTAPI
IoStartPacket(
  IN PDEVICE_OBJECT DeviceObject,
  IN PIRP Irp,
  IN PULONG Key OPTIONAL,
  IN PDRIVER_CANCEL CancelFunction OPTIONAL);

NTKERNELAPI
VOID
NTAPI
IoStartTimer(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
VOID
NTAPI
IoStopTimer(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoUnregisterPlugPlayNotification(
  IN PVOID NotificationEntry);

NTKERNELAPI
VOID
NTAPI
IoUnregisterShutdownNotification(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
VOID
NTAPI
IoUpdateShareAccess(
  IN PFILE_OBJECT FileObject,
  IN OUT PSHARE_ACCESS ShareAccess);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIAllocateInstanceIds(
  IN GUID *Guid,
  IN ULONG InstanceCount,
  OUT ULONG *FirstInstanceId);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIQuerySingleInstanceMultiple(
  IN PVOID *DataBlockObjectList,
  IN PUNICODE_STRING InstanceNames,
  IN ULONG ObjectCount,
  IN OUT ULONG *InOutBufferSize,
  OUT PVOID OutBuffer);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIRegistrationControl(
  IN PDEVICE_OBJECT DeviceObject,
  IN ULONG Action);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMISuggestInstanceName(
  IN PDEVICE_OBJECT PhysicalDeviceObject OPTIONAL,
  IN PUNICODE_STRING SymbolicLinkName OPTIONAL,
  IN BOOLEAN CombineNames,
  OUT PUNICODE_STRING SuggestedInstanceName);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIWriteEvent(
  IN OUT PVOID WnodeEventItem);

NTKERNELAPI
VOID
NTAPI
IoWriteErrorLogEntry(
  IN PVOID ElEntry);

NTKERNELAPI
PIRP
NTAPI
IoGetTopLevelIrp(VOID);

NTKERNELAPI
NTSTATUS
NTAPI
IoRegisterLastChanceShutdownNotification(
  IN PDEVICE_OBJECT DeviceObject);

NTKERNELAPI
VOID
NTAPI
IoSetTopLevelIrp(
  IN PIRP Irp OPTIONAL);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */


#if (NTDDI_VERSION >= NTDDI_WINXP)

NTKERNELAPI
NTSTATUS
NTAPI
IoCsqInitialize(
  IN PIO_CSQ Csq,
  IN PIO_CSQ_INSERT_IRP CsqInsertIrp,
  IN PIO_CSQ_REMOVE_IRP CsqRemoveIrp,
  IN PIO_CSQ_PEEK_NEXT_IRP CsqPeekNextIrp,
  IN PIO_CSQ_ACQUIRE_LOCK CsqAcquireLock,
  IN PIO_CSQ_RELEASE_LOCK CsqReleaseLock,
  IN PIO_CSQ_COMPLETE_CANCELED_IRP CsqCompleteCanceledIrp);

NTKERNELAPI
VOID
NTAPI
IoCsqInsertIrp(
  IN PIO_CSQ Csq,
  IN PIRP Irp,
  IN PIO_CSQ_IRP_CONTEXT Context OPTIONAL);

NTKERNELAPI
PIRP
NTAPI
IoCsqRemoveIrp(
  IN PIO_CSQ Csq,
  IN PIO_CSQ_IRP_CONTEXT Context);

NTKERNELAPI
PIRP
NTAPI
IoCsqRemoveNextIrp(
  IN PIO_CSQ Csq,
  IN PVOID PeekContext OPTIONAL);

NTKERNELAPI
BOOLEAN
NTAPI
IoForwardIrpSynchronously(
  IN PDEVICE_OBJECT DeviceObject,
  IN PIRP Irp);

#define IoForwardAndCatchIrp IoForwardIrpSynchronously

NTKERNELAPI
VOID
NTAPI
IoFreeErrorLogEntry(
  PVOID ElEntry);

NTKERNELAPI
NTSTATUS
NTAPI
IoSetCompletionRoutineEx(
  IN PDEVICE_OBJECT DeviceObject,
  IN PIRP Irp,
  IN PIO_COMPLETION_ROUTINE CompletionRoutine,
  IN PVOID Context,
  IN BOOLEAN InvokeOnSuccess,
  IN BOOLEAN InvokeOnError,
  IN BOOLEAN InvokeOnCancel);

VOID
NTAPI
IoSetStartIoAttributes(
  IN PDEVICE_OBJECT DeviceObject,
  IN BOOLEAN DeferredStartIo,
  IN BOOLEAN NonCancelable);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIDeviceObjectToInstanceName(
  IN PVOID DataBlockObject,
  IN PDEVICE_OBJECT DeviceObject,
  OUT PUNICODE_STRING InstanceName);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIExecuteMethod(
  IN PVOID DataBlockObject,
  IN PUNICODE_STRING InstanceName,
  IN ULONG MethodId,
  IN ULONG InBufferSize,
  IN OUT PULONG OutBufferSize,
  IN OUT  PUCHAR InOutBuffer);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIHandleToInstanceName(
  IN PVOID DataBlockObject,
  IN HANDLE FileHandle,
  OUT PUNICODE_STRING InstanceName);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIOpenBlock(
  IN GUID *DataBlockGuid,
  IN ULONG DesiredAccess,
  OUT PVOID *DataBlockObject);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIQueryAllData(
  IN PVOID DataBlockObject,
  IN OUT ULONG *InOutBufferSize,
  OUT PVOID OutBuffer);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIQueryAllDataMultiple(
  IN PVOID *DataBlockObjectList,
  IN ULONG ObjectCount,
  IN OUT ULONG *InOutBufferSize,
  OUT PVOID OutBuffer);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMIQuerySingleInstance(
  IN PVOID DataBlockObject,
  IN PUNICODE_STRING InstanceName,
  IN OUT ULONG *InOutBufferSize,
  OUT PVOID OutBuffer);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMISetNotificationCallback(
  IN OUT PVOID Object,
  IN WMI_NOTIFICATION_CALLBACK Callback,
  IN PVOID Context OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMISetSingleInstance(
  IN PVOID DataBlockObject,
  IN PUNICODE_STRING InstanceName,
  IN ULONG Version,
  IN ULONG ValueBufferSize,
  IN PVOID ValueBuffer);

NTKERNELAPI
NTSTATUS
NTAPI
IoWMISetSingleItem(
  IN PVOID DataBlockObject,
  IN PUNICODE_STRING InstanceName,
  IN ULONG DataItemId,
  IN ULONG Version,
  IN ULONG ValueBufferSize,
  IN PVOID ValueBuffer);

#endif /* (NTDDI_VERSION >= NTDDI_WINXP) */

#if (NTDDI_VERSION >= NTDDI_WINXPSP1)
NTKERNELAPI
NTSTATUS
NTAPI
IoValidateDeviceIoControlAccess(
  IN PIRP Irp,
  IN ULONG RequiredAccess);
#endif

#if (NTDDI_VERSION >= NTDDI_WS03)
NTKERNELAPI
NTSTATUS
NTAPI
IoCsqInitializeEx(
  IN PIO_CSQ Csq,
  IN PIO_CSQ_INSERT_IRP_EX CsqInsertIrp,
  IN PIO_CSQ_REMOVE_IRP CsqRemoveIrp,
  IN PIO_CSQ_PEEK_NEXT_IRP CsqPeekNextIrp,
  IN PIO_CSQ_ACQUIRE_LOCK CsqAcquireLock,
  IN PIO_CSQ_RELEASE_LOCK CsqReleaseLock,
  IN PIO_CSQ_COMPLETE_CANCELED_IRP CsqCompleteCanceledIrp);

NTKERNELAPI
NTSTATUS
NTAPI
IoCsqInsertIrpEx(
  IN PIO_CSQ Csq,
  IN PIRP Irp,
  IN PIO_CSQ_IRP_CONTEXT Context OPTIONAL,
  IN PVOID InsertContext OPTIONAL);
#endif /* (NTDDI_VERSION >= NTDDI_WS03) */


#if (NTDDI_VERSION >= NTDDI_VISTA)
NTKERNELAPI
NTSTATUS
NTAPI
IoGetBootDiskInformationLite(
  OUT PBOOTDISK_INFORMATION_LITE *BootDiskInformation);

NTKERNELAPI
NTSTATUS
NTAPI
IoCheckShareAccessEx(
  IN ACCESS_MASK DesiredAccess,
  IN ULONG DesiredShareAccess,
  IN OUT PFILE_OBJECT FileObject,
  IN OUT PSHARE_ACCESS ShareAccess,
  IN BOOLEAN Update,
  IN PBOOLEAN WritePermission);

NTKERNELAPI
NTSTATUS
NTAPI
IoConnectInterruptEx(
  IN OUT PIO_CONNECT_INTERRUPT_PARAMETERS Parameters);

NTKERNELAPI
VOID
NTAPI
IoDisconnectInterruptEx(
  IN PIO_DISCONNECT_INTERRUPT_PARAMETERS Parameters);

LOGICAL
NTAPI
IoWithinStackLimits(
  IN ULONG_PTR RegionStart,
  IN SIZE_T RegionSize);

NTKERNELAPI
VOID
NTAPI
IoSetShareAccessEx(
  IN ACCESS_MASK DesiredAccess,
  IN ULONG DesiredShareAccess,
  IN OUT PFILE_OBJECT FileObject,
  OUT PSHARE_ACCESS ShareAccess,
  IN PBOOLEAN WritePermission);

ULONG
NTAPI
IoSizeofWorkItem(VOID);

VOID
NTAPI
IoInitializeWorkItem(
  IN PVOID IoObject,
  IN PIO_WORKITEM IoWorkItem);

VOID
NTAPI
IoUninitializeWorkItem(
  IN PIO_WORKITEM IoWorkItem);

VOID
NTAPI
IoQueueWorkItemEx(
  IN PIO_WORKITEM IoWorkItem,
  IN PIO_WORKITEM_ROUTINE_EX WorkerRoutine,
  IN WORK_QUEUE_TYPE QueueType,
  IN PVOID Context OPTIONAL);

IO_PRIORITY_HINT
NTAPI
IoGetIoPriorityHint(
  IN PIRP Irp);

NTSTATUS
NTAPI
IoSetIoPriorityHint(
  IN PIRP Irp,
  IN IO_PRIORITY_HINT PriorityHint);

NTSTATUS
NTAPI
IoAllocateSfioStreamIdentifier(
  IN PFILE_OBJECT FileObject,
  IN ULONG Length,
  IN PVOID Signature,
  OUT PVOID *StreamIdentifier);

PVOID
NTAPI
IoGetSfioStreamIdentifier(
  IN PFILE_OBJECT FileObject,
  IN PVOID Signature);

NTSTATUS
NTAPI
IoFreeSfioStreamIdentifier(
  IN PFILE_OBJECT FileObject,
  IN PVOID Signature);

NTKERNELAPI
NTSTATUS
NTAPI
IoRequestDeviceEjectEx(
  IN PDEVICE_OBJECT PhysicalDeviceObject,
  IN PIO_DEVICE_EJECT_CALLBACK Callback OPTIONAL,
  IN PVOID Context OPTIONAL,
  IN PDRIVER_OBJECT DriverObject OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
IoSetDevicePropertyData(
  IN PDEVICE_OBJECT     Pdo,
  IN CONST DEVPROPKEY   *PropertyKey,
  IN LCID               Lcid,
  IN ULONG              Flags,
  IN DEVPROPTYPE        Type,
  IN ULONG              Size,
  IN PVOID          Data OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetDevicePropertyData(
  PDEVICE_OBJECT Pdo,
  CONST DEVPROPKEY *PropertyKey,
  LCID Lcid,
  ULONG Flags,
  ULONG Size,
  PVOID Data,
  PULONG RequiredSize,
  PDEVPROPTYPE Type);

#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#define IoCallDriverStackSafeDefault(a, b) IoCallDriver(a, b)

#if (NTDDI_VERSION >= NTDDI_WS08)
NTKERNELAPI
NTSTATUS
NTAPI
IoReplacePartitionUnit(
  IN PDEVICE_OBJECT TargetPdo,
  IN PDEVICE_OBJECT SparePdo,
  IN ULONG Flags);
#endif

#if (NTDDI_VERSION >= NTDDI_WIN7)

NTKERNELAPI
NTSTATUS
NTAPI
IoGetAffinityInterrupt(
  IN PKINTERRUPT InterruptObject,
  OUT PGROUP_AFFINITY GroupAffinity);

NTSTATUS
NTAPI
IoGetContainerInformation(
  IN IO_CONTAINER_INFORMATION_CLASS InformationClass,
  IN PVOID ContainerObject OPTIONAL,
  IN OUT PVOID Buffer OPTIONAL,
  IN ULONG BufferLength);

NTSTATUS
NTAPI
IoRegisterContainerNotification(
  IN IO_CONTAINER_NOTIFICATION_CLASS NotificationClass,
  IN PIO_CONTAINER_NOTIFICATION_FUNCTION CallbackFunction,
  IN PVOID NotificationInformation OPTIONAL,
  IN ULONG NotificationInformationLength,
  OUT PVOID CallbackRegistration);

VOID
NTAPI
IoUnregisterContainerNotification(
  IN PVOID CallbackRegistration);

NTKERNELAPI
NTSTATUS
NTAPI
IoUnregisterPlugPlayNotificationEx(
  IN PVOID NotificationEntry);

NTKERNELAPI
NTSTATUS
NTAPI
IoGetDeviceNumaNode(
  IN PDEVICE_OBJECT Pdo,
  OUT PUSHORT NodeNumber);

#endif /* (NTDDI_VERSION >= NTDDI_WIN7) */

#if defined(_WIN64)
NTKERNELAPI
ULONG
NTAPI
IoWMIDeviceObjectToProviderId(
  IN PDEVICE_OBJECT DeviceObject);
#else
#define IoWMIDeviceObjectToProviderId(DeviceObject) ((ULONG)(DeviceObject))
#endif

/*
 * USHORT
 * IoSizeOfIrp(
 *   IN CCHAR  StackSize)
 */
#define IoSizeOfIrp(_StackSize) \
  ((USHORT) (sizeof(IRP) + ((_StackSize) * (sizeof(IO_STACK_LOCATION)))))

FORCEINLINE
VOID
IoSkipCurrentIrpStackLocation(
  IN OUT PIRP Irp)
{
  ASSERT(Irp->CurrentLocation <= Irp->StackCount);
  Irp->CurrentLocation++;
#ifdef NONAMELESSUNION
  Irp->Tail.Overlay.s.u.CurrentStackLocation++;
#else
  Irp->Tail.Overlay.CurrentStackLocation++;
#endif
}

FORCEINLINE
VOID
IoSetNextIrpStackLocation(
  IN OUT PIRP Irp)
{
  ASSERT(Irp->CurrentLocation > 0);
  Irp->CurrentLocation--;
#ifdef NONAMELESSUNION
  Irp->Tail.Overlay.s.u.CurrentStackLocation--;
#else
  Irp->Tail.Overlay.CurrentStackLocation--;
#endif
}

FORCEINLINE
PIO_STACK_LOCATION
IoGetNextIrpStackLocation(
  IN PIRP Irp)
{
  ASSERT(Irp->CurrentLocation > 0);
#ifdef NONAMELESSUNION
  return ((Irp)->Tail.Overlay.s.u.CurrentStackLocation - 1 );
#else
  return ((Irp)->Tail.Overlay.CurrentStackLocation - 1 );
#endif
}

FORCEINLINE
VOID
IoSetCompletionRoutine(
  IN PIRP Irp,
  IN PIO_COMPLETION_ROUTINE CompletionRoutine OPTIONAL,
  IN PVOID Context OPTIONAL,
  IN BOOLEAN InvokeOnSuccess,
  IN BOOLEAN InvokeOnError,
  IN BOOLEAN InvokeOnCancel)
{
  PIO_STACK_LOCATION irpSp;
  ASSERT( (InvokeOnSuccess || InvokeOnError || InvokeOnCancel) ? (CompletionRoutine != NULL) : TRUE );
  irpSp = IoGetNextIrpStackLocation(Irp);
  irpSp->CompletionRoutine = CompletionRoutine;
  irpSp->Context = Context;
  irpSp->Control = 0;

  if (InvokeOnSuccess) {
    irpSp->Control = SL_INVOKE_ON_SUCCESS;
  }

  if (InvokeOnError) {
    irpSp->Control |= SL_INVOKE_ON_ERROR;
  }

  if (InvokeOnCancel) {
    irpSp->Control |= SL_INVOKE_ON_CANCEL;
  }
}

/*
 * PDRIVER_CANCEL
 * IoSetCancelRoutine(
 *   IN PIRP  Irp,
 *   IN PDRIVER_CANCEL  CancelRoutine)
 */
#define IoSetCancelRoutine(_Irp, \
                           _CancelRoutine) \
  ((PDRIVER_CANCEL) (ULONG_PTR) InterlockedExchangePointer( \
    (PVOID *) &(_Irp)->CancelRoutine, (PVOID) (ULONG_PTR) (_CancelRoutine)))

/*
 * VOID
 * IoRequestDpc(
 *   IN PDEVICE_OBJECT  DeviceObject,
 *   IN PIRP  Irp,
 *   IN PVOID  Context);
 */
#define IoRequestDpc(DeviceObject, Irp, Context)( \
  KeInsertQueueDpc(&(DeviceObject)->Dpc, (Irp), (Context)))

/*
 * VOID
 * IoReleaseRemoveLock(
 *   IN PIO_REMOVE_LOCK  RemoveLock,
 *   IN PVOID  Tag)
 */
#define IoReleaseRemoveLock(_RemoveLock, \
                            _Tag) \
  IoReleaseRemoveLockEx(_RemoveLock, _Tag, sizeof(IO_REMOVE_LOCK))

/*
 * VOID
 * IoReleaseRemoveLockAndWait(
 *   IN PIO_REMOVE_LOCK  RemoveLock,
 *   IN PVOID  Tag)
 */
#define IoReleaseRemoveLockAndWait(_RemoveLock, \
                                   _Tag) \
  IoReleaseRemoveLockAndWaitEx(_RemoveLock, _Tag, sizeof(IO_REMOVE_LOCK))

#if defined(_WIN64)
NTKERNELAPI
BOOLEAN
IoIs32bitProcess(
  IN PIRP Irp OPTIONAL);
#endif

#define PLUGPLAY_REGKEY_DEVICE                            1
#define PLUGPLAY_REGKEY_DRIVER                            2
#define PLUGPLAY_REGKEY_CURRENT_HWPROFILE                 4

FORCEINLINE
PIO_STACK_LOCATION
IoGetCurrentIrpStackLocation(
  IN PIRP Irp)
{
  ASSERT(Irp->CurrentLocation <= Irp->StackCount + 1);
#ifdef NONAMELESSUNION
  return Irp->Tail.Overlay.s.u.CurrentStackLocation;
#else
  return Irp->Tail.Overlay.CurrentStackLocation;
#endif
}

FORCEINLINE
VOID
IoMarkIrpPending(
  IN OUT PIRP Irp)
{
  IoGetCurrentIrpStackLocation( (Irp) )->Control |= SL_PENDING_RETURNED;
}

/*
 * BOOLEAN
 * IoIsErrorUserInduced(
 *   IN NTSTATUS  Status);
 */
#define IoIsErrorUserInduced(Status) \
   ((BOOLEAN)(((Status) == STATUS_DEVICE_NOT_READY) || \
   ((Status) == STATUS_IO_TIMEOUT) || \
   ((Status) == STATUS_MEDIA_WRITE_PROTECTED) || \
   ((Status) == STATUS_NO_MEDIA_IN_DEVICE) || \
   ((Status) == STATUS_VERIFY_REQUIRED) || \
   ((Status) == STATUS_UNRECOGNIZED_MEDIA) || \
   ((Status) == STATUS_WRONG_VOLUME)))

/* VOID
 * IoInitializeRemoveLock(
 *   IN PIO_REMOVE_LOCK  Lock,
 *   IN ULONG  AllocateTag,
 *   IN ULONG  MaxLockedMinutes,
 *   IN ULONG  HighWatermark)
 */
#define IoInitializeRemoveLock( \
  Lock, AllocateTag, MaxLockedMinutes, HighWatermark) \
  IoInitializeRemoveLockEx(Lock, AllocateTag, MaxLockedMinutes, \
    HighWatermark, sizeof(IO_REMOVE_LOCK))

FORCEINLINE
VOID
IoInitializeDpcRequest(
  IN PDEVICE_OBJECT DeviceObject,
  IN PIO_DPC_ROUTINE DpcRoutine)
{
  KeInitializeDpc( &DeviceObject->Dpc,
                   (PKDEFERRED_ROUTINE) DpcRoutine,
                   DeviceObject );
}

#define DEVICE_INTERFACE_INCLUDE_NONACTIVE 0x00000001

/*
 * ULONG
 * IoGetFunctionCodeFromCtlCode(
 *   IN ULONG  ControlCode)
 */
#define IoGetFunctionCodeFromCtlCode(_ControlCode) \
  (((_ControlCode) >> 2) & 0x00000FFF)

FORCEINLINE
VOID
IoCopyCurrentIrpStackLocationToNext(
  IN OUT PIRP Irp)
{
  PIO_STACK_LOCATION irpSp;
  PIO_STACK_LOCATION nextIrpSp;
  irpSp = IoGetCurrentIrpStackLocation(Irp);
  nextIrpSp = IoGetNextIrpStackLocation(Irp);
  RtlCopyMemory( nextIrpSp, irpSp, FIELD_OFFSET(IO_STACK_LOCATION, CompletionRoutine));
  nextIrpSp->Control = 0;
}

NTKERNELAPI
VOID
NTAPI
IoGetStackLimits(
  OUT PULONG_PTR LowLimit,
  OUT PULONG_PTR HighLimit);

FORCEINLINE
ULONG_PTR
IoGetRemainingStackSize(VOID)
{
  ULONG_PTR End, Begin;
  ULONG_PTR Result;

  IoGetStackLimits(&Begin, &End);
  Result = (ULONG_PTR)(&End) - Begin;
  return Result;
}

#if (NTDDI_VERSION >= NTDDI_WS03)
FORCEINLINE
VOID
IoInitializeThreadedDpcRequest(
  IN PDEVICE_OBJECT DeviceObject,
  IN PIO_DPC_ROUTINE DpcRoutine)
{
  KeInitializeThreadedDpc(&DeviceObject->Dpc,
                          (PKDEFERRED_ROUTINE) DpcRoutine,
                          DeviceObject );
}
#endif

/******************************************************************************
 *                     Power Management Support Functions                     *
 ******************************************************************************/

#define PoSetDeviceBusy(IdlePointer) ((void)(*(IdlePointer) = 0))

#if (NTDDI_VERSION >= NTDDI_WIN2K)

NTKERNELAPI
NTSTATUS
NTAPI
PoCallDriver(
  IN struct _DEVICE_OBJECT *DeviceObject,
  IN OUT struct _IRP *Irp);

NTKERNELAPI
PULONG
NTAPI
PoRegisterDeviceForIdleDetection(
  IN struct _DEVICE_OBJECT *DeviceObject,
  IN ULONG ConservationIdleTime,
  IN ULONG PerformanceIdleTime,
  IN DEVICE_POWER_STATE State);

NTKERNELAPI
PVOID
NTAPI
PoRegisterSystemState(
  IN OUT PVOID StateHandle OPTIONAL,
  IN EXECUTION_STATE Flags);

NTKERNELAPI
NTSTATUS
NTAPI
PoRequestPowerIrp(
  IN struct _DEVICE_OBJECT *DeviceObject,
  IN UCHAR MinorFunction,
  IN POWER_STATE PowerState,
  IN PREQUEST_POWER_COMPLETE CompletionFunction OPTIONAL,
  IN PVOID Context OPTIONAL,
  OUT struct _IRP **Irp OPTIONAL);

NTKERNELAPI
POWER_STATE
NTAPI
PoSetPowerState(
  IN struct _DEVICE_OBJECT *DeviceObject,
  IN POWER_STATE_TYPE Type,
  IN POWER_STATE State);

NTKERNELAPI
VOID
NTAPI
PoSetSystemState(
  IN EXECUTION_STATE Flags);

NTKERNELAPI
VOID
NTAPI
PoStartNextPowerIrp(
  IN OUT struct _IRP *Irp);

NTKERNELAPI
VOID
NTAPI
PoUnregisterSystemState(
  IN OUT PVOID StateHandle);

NTKERNELAPI
NTSTATUS
NTAPI
PoRequestShutdownEvent(
  OUT PVOID *Event);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_VISTA)

NTKERNELAPI
VOID
NTAPI
PoSetSystemWake(
  IN OUT struct _IRP *Irp);

NTKERNELAPI
BOOLEAN
NTAPI
PoGetSystemWake(
  IN struct _IRP *Irp);

NTKERNELAPI
NTSTATUS
NTAPI
PoRegisterPowerSettingCallback(
  IN PDEVICE_OBJECT DeviceObject OPTIONAL,
  IN LPCGUID SettingGuid,
  IN PPOWER_SETTING_CALLBACK Callback,
  IN PVOID Context OPTIONAL,
  OUT PVOID *Handle OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
PoUnregisterPowerSettingCallback(
  IN OUT PVOID Handle);

#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#if (NTDDI_VERSION >= NTDDI_VISTASP1)
NTKERNELAPI
VOID
NTAPI
PoSetDeviceBusyEx(
  IN OUT PULONG IdlePointer);
#endif /* (NTDDI_VERSION >= NTDDI_VISTASP1) */

#if (NTDDI_VERSION >= NTDDI_WIN7)

NTKERNELAPI
VOID
NTAPI
PoStartDeviceBusy(
  IN OUT PULONG IdlePointer);

NTKERNELAPI
VOID
NTAPI
PoEndDeviceBusy(
  IN OUT PULONG IdlePointer);

NTKERNELAPI
BOOLEAN
NTAPI
PoQueryWatchdogTime(
  IN PDEVICE_OBJECT Pdo,
  OUT PULONG SecondsRemaining);

NTKERNELAPI
VOID
NTAPI
PoDeletePowerRequest(
  IN OUT PVOID PowerRequest);

NTKERNELAPI
NTSTATUS
NTAPI
PoSetPowerRequest(
  IN OUT PVOID PowerRequest,
  IN POWER_REQUEST_TYPE Type);

NTKERNELAPI
NTSTATUS
NTAPI
PoClearPowerRequest(
  IN OUT PVOID PowerRequest,
  IN POWER_REQUEST_TYPE Type);

NTKERNELAPI
NTSTATUS
NTAPI
PoCreatePowerRequest(
  OUT PVOID *PowerRequest,
  IN PDEVICE_OBJECT DeviceObject,
  IN PCOUNTED_REASON_CONTEXT Context);

#endif /* (NTDDI_VERSION >= NTDDI_WIN7) */

/******************************************************************************
 *                          Executive Functions                               *
 ******************************************************************************/

#define ExInterlockedIncrementLong(Addend,Lock) Exfi386InterlockedIncrementLong(Addend)
#define ExInterlockedDecrementLong(Addend,Lock) Exfi386InterlockedDecrementLong(Addend)
#define ExInterlockedExchangeUlong(Target, Value, Lock) Exfi386InterlockedExchangeUlong(Target, Value)

#define ExAcquireSpinLock(Lock, OldIrql) KeAcquireSpinLock((Lock), (OldIrql))
#define ExReleaseSpinLock(Lock, OldIrql) KeReleaseSpinLock((Lock), (OldIrql))
#define ExAcquireSpinLockAtDpcLevel(Lock) KeAcquireSpinLockAtDpcLevel(Lock)
#define ExReleaseSpinLockFromDpcLevel(Lock) KeReleaseSpinLockFromDpcLevel(Lock)

#define ExInitializeSListHead InitializeSListHead

#if defined(_NTHAL_) && defined(_X86_)

NTKERNELAPI
VOID
FASTCALL
ExiAcquireFastMutex(
  IN OUT PFAST_MUTEX FastMutex);

NTKERNELAPI
VOID
FASTCALL
ExiReleaseFastMutex(
  IN OUT PFAST_MUTEX FastMutex);

NTKERNELAPI
BOOLEAN
FASTCALL
ExiTryToAcquireFastMutex(
    IN OUT PFAST_MUTEX FastMutex);

#define ExAcquireFastMutex ExiAcquireFastMutex
#define ExReleaseFastMutex ExiReleaseFastMutex
#define ExTryToAcquireFastMutex ExiTryToAcquireFastMutex

#else

#if (NTDDI_VERSION >= NTDDI_WIN2K)

NTKERNELAPI
VOID
FASTCALL
ExAcquireFastMutex(
  IN OUT PFAST_MUTEX FastMutex);

NTKERNELAPI
VOID
FASTCALL
ExReleaseFastMutex(
  IN OUT PFAST_MUTEX FastMutex);

NTKERNELAPI
BOOLEAN
FASTCALL
ExTryToAcquireFastMutex(
  IN OUT PFAST_MUTEX FastMutex);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#endif /* defined(_NTHAL_) && defined(_X86_) */

#if defined(_X86_)
#define ExInterlockedAddUlong ExfInterlockedAddUlong
#define ExInterlockedInsertHeadList ExfInterlockedInsertHeadList
#define ExInterlockedInsertTailList ExfInterlockedInsertTailList
#define ExInterlockedRemoveHeadList ExfInterlockedRemoveHeadList
#define ExInterlockedPopEntryList ExfInterlockedPopEntryList
#define ExInterlockedPushEntryList ExfInterlockedPushEntryList
#endif /* defined(_X86_) */

#if defined(_WIN64)

#if defined(_NTDRIVER_) || defined(_NTDDK_) || defined(_NTIFS_) || \
    defined(_NTHAL_) || defined(_NTOSP_)
NTKERNELAPI
USHORT
ExQueryDepthSList(IN PSLIST_HEADER ListHead);
#else
FORCEINLINE
USHORT
ExQueryDepthSList(IN PSLIST_HEADER ListHead)
{
  return (USHORT)(ListHead->Alignment & 0xffff);
}
#endif

NTKERNELAPI
PSLIST_ENTRY
ExpInterlockedFlushSList(
  PSLIST_HEADER ListHead);

NTKERNELAPI
PSLIST_ENTRY
ExpInterlockedPopEntrySList(
  PSLIST_HEADER ListHead);

NTKERNELAPI
PSLIST_ENTRY
ExpInterlockedPushEntrySList(
  PSLIST_HEADER ListHead,
  PSLIST_ENTRY ListEntry);

#define ExInterlockedFlushSList(Head) \
    ExpInterlockedFlushSList(Head)
#define ExInterlockedPopEntrySList(Head, Lock) \
    ExpInterlockedPopEntrySList(Head)
#define ExInterlockedPushEntrySList(Head, Entry, Lock) \
    ExpInterlockedPushEntrySList(Head, Entry)

#else /* !defined(_WIN64) */

#ifdef NONAMELESSUNION
#define ExQueryDepthSList(listhead) (listhead)->s.Depth
#else
#define ExQueryDepthSList(listhead) (listhead)->Depth
#endif

NTKERNELAPI
PSINGLE_LIST_ENTRY
FASTCALL
ExInterlockedFlushSList(
  IN OUT PSLIST_HEADER ListHead);

#endif /* !defined(_WIN64) */

#if defined(_WIN2K_COMPAT_SLIST_USAGE) && defined(_X86_)

NTKERNELAPI
PSINGLE_LIST_ENTRY 
FASTCALL
ExInterlockedPopEntrySList(
  IN PSLIST_HEADER ListHead,
  IN PKSPIN_LOCK Lock);

NTKERNELAPI
PSINGLE_LIST_ENTRY 
FASTCALL
ExInterlockedPushEntrySList(
  IN PSLIST_HEADER ListHead,
  IN PSINGLE_LIST_ENTRY ListEntry,
  IN PKSPIN_LOCK Lock);

NTKERNELAPI
PVOID
NTAPI
ExAllocateFromPagedLookasideList(
  IN OUT PPAGED_LOOKASIDE_LIST Lookaside);

NTKERNELAPI
VOID
NTAPI
ExFreeToPagedLookasideList(
  IN OUT PPAGED_LOOKASIDE_LIST Lookaside,
  IN PVOID Entry);

#else /* !_WIN2K_COMPAT_SLIST_USAGE */

#if !defined(_WIN64)
#define ExInterlockedPopEntrySList(_ListHead, _Lock) \
    InterlockedPopEntrySList(_ListHead)
#define ExInterlockedPushEntrySList(_ListHead, _ListEntry, _Lock) \
    InterlockedPushEntrySList(_ListHead, _ListEntry)
#endif

static __inline
PVOID
ExAllocateFromPagedLookasideList(
  IN OUT PPAGED_LOOKASIDE_LIST Lookaside)
{
  PVOID Entry;

  Lookaside->L.TotalAllocates++;
#ifdef NONAMELESSUNION
  Entry = InterlockedPopEntrySList(&Lookaside->L.u.ListHead);
  if (Entry == NULL) {
    Lookaside->L.u2.AllocateMisses++;
    Entry = (Lookaside->L.u4.Allocate)(Lookaside->L.Type,
                                       Lookaside->L.Size,
                                       Lookaside->L.Tag);
  }
#else /* NONAMELESSUNION */
  Entry = InterlockedPopEntrySList(&Lookaside->L.ListHead);
  if (Entry == NULL) {
    Lookaside->L.AllocateMisses++;
    Entry = (Lookaside->L.Allocate)(Lookaside->L.Type,
                                    Lookaside->L.Size,
                                    Lookaside->L.Tag);
  }
#endif /* NONAMELESSUNION */
  return Entry;
}

static __inline
VOID
ExFreeToPagedLookasideList(
  IN OUT PPAGED_LOOKASIDE_LIST Lookaside,
  IN PVOID Entry)
{
  Lookaside->L.TotalFrees++;
#ifdef NONAMELESSUNION
  if (ExQueryDepthSList(&Lookaside->L.u.ListHead) >= Lookaside->L.Depth) {
    Lookaside->L.u3.FreeMisses++;
    (Lookaside->L.u5.Free)(Entry);
  } else {
    InterlockedPushEntrySList(&Lookaside->L.u.ListHead, (PSLIST_ENTRY)Entry);
  }
#else /* NONAMELESSUNION */
  if (ExQueryDepthSList(&Lookaside->L.ListHead) >= Lookaside->L.Depth) {
    Lookaside->L.FreeMisses++;
    (Lookaside->L.Free)(Entry);
  } else {
    InterlockedPushEntrySList(&Lookaside->L.ListHead, (PSLIST_ENTRY)Entry);
  }
#endif /* NONAMELESSUNION */
}

#endif /* _WIN2K_COMPAT_SLIST_USAGE */


/* ERESOURCE_THREAD
 * ExGetCurrentResourceThread(
 *     VOID);
 */
#define ExGetCurrentResourceThread() ((ULONG_PTR)PsGetCurrentThread())

#define ExReleaseResource(R) (ExReleaseResourceLite(R))

/* VOID
 * ExInitializeWorkItem(
 *     IN PWORK_QUEUE_ITEM Item,
 *     IN PWORKER_THREAD_ROUTINE Routine,
 *     IN PVOID Context)
 */
#define ExInitializeWorkItem(Item, Routine, Context) \
{ \
  (Item)->WorkerRoutine = Routine; \
  (Item)->Parameter = Context; \
  (Item)->List.Flink = NULL; \
}

FORCEINLINE
VOID
ExInitializeFastMutex(
  OUT PFAST_MUTEX FastMutex)
{
  FastMutex->Count = FM_LOCK_BIT;
  FastMutex->Owner = NULL;
  FastMutex->Contention = 0;
  KeInitializeEvent(&FastMutex->Event, SynchronizationEvent, FALSE);
  return;
}


#if (NTDDI_VERSION >= NTDDI_WIN2K)
NTKERNELAPI
VOID
FASTCALL
ExAcquireFastMutexUnsafe(
  IN OUT PFAST_MUTEX FastMutex);

NTKERNELAPI
VOID
FASTCALL
ExReleaseFastMutexUnsafe(
  IN OUT PFAST_MUTEX FastMutex);

NTKERNELAPI
BOOLEAN
NTAPI
ExAcquireResourceExclusiveLite(
  IN OUT PERESOURCE Resource,
  IN BOOLEAN Wait);

NTKERNELAPI
BOOLEAN
NTAPI
ExAcquireResourceSharedLite(
  IN OUT PERESOURCE Resource,
  IN BOOLEAN Wait);

NTKERNELAPI
BOOLEAN
NTAPI
ExAcquireSharedStarveExclusive(
  IN OUT PERESOURCE Resource,
  IN BOOLEAN Wait);

NTKERNELAPI
BOOLEAN
NTAPI
ExAcquireSharedWaitForExclusive(
  IN OUT PERESOURCE Resource,
  IN BOOLEAN Wait);

NTKERNELAPI
PVOID
NTAPI
ExAllocatePool(
  IN POOL_TYPE PoolType,
  IN SIZE_T NumberOfBytes);

NTKERNELAPI
PVOID
NTAPI
ExAllocatePoolWithQuota(
  IN POOL_TYPE PoolType,
  IN SIZE_T NumberOfBytes);

NTKERNELAPI
PVOID
NTAPI
ExAllocatePoolWithQuotaTag(
  IN POOL_TYPE PoolType,
  IN SIZE_T NumberOfBytes,
  IN ULONG Tag);

#ifndef POOL_TAGGING
#define ExAllocatePoolWithQuotaTag(a,b,c) ExAllocatePoolWithQuota(a,b)
#endif

NTKERNELAPI
PVOID
NTAPI
ExAllocatePoolWithTag(
  IN POOL_TYPE PoolType,
  IN SIZE_T NumberOfBytes,
  IN ULONG Tag);

#ifndef POOL_TAGGING
#define ExAllocatePoolWithTag(a,b,c) ExAllocatePool(a,b)
#endif

NTKERNELAPI
PVOID
NTAPI
ExAllocatePoolWithTagPriority(
  IN POOL_TYPE PoolType,
  IN SIZE_T NumberOfBytes,
  IN ULONG Tag,
  IN EX_POOL_PRIORITY Priority);

NTKERNELAPI
VOID
NTAPI
ExConvertExclusiveToSharedLite(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
NTSTATUS
NTAPI
ExCreateCallback(
  OUT PCALLBACK_OBJECT *CallbackObject,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN BOOLEAN Create,
  IN BOOLEAN AllowMultipleCallbacks);

NTKERNELAPI
VOID
NTAPI
ExDeleteNPagedLookasideList(
  IN OUT PNPAGED_LOOKASIDE_LIST Lookaside);

NTKERNELAPI
VOID
NTAPI
ExDeletePagedLookasideList(
  IN PPAGED_LOOKASIDE_LIST Lookaside);

NTKERNELAPI
NTSTATUS
NTAPI
ExDeleteResourceLite(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
VOID
NTAPI
ExFreePool(
  IN PVOID P);

NTKERNELAPI
VOID
NTAPI
ExFreePoolWithTag(
  IN PVOID P,
  IN ULONG Tag);

NTKERNELAPI
ULONG
NTAPI
ExGetExclusiveWaiterCount(
  IN PERESOURCE Resource);

NTKERNELAPI
KPROCESSOR_MODE
NTAPI
ExGetPreviousMode(VOID);

NTKERNELAPI
ULONG
NTAPI
ExGetSharedWaiterCount(
  IN PERESOURCE Resource);

NTKERNELAPI
VOID
NTAPI
ExInitializeNPagedLookasideList(
  IN PNPAGED_LOOKASIDE_LIST Lookaside,
  IN PALLOCATE_FUNCTION Allocate OPTIONAL,
  IN PFREE_FUNCTION Free OPTIONAL,
  IN ULONG Flags,
  IN SIZE_T Size,
  IN ULONG Tag,
  IN USHORT Depth);

NTKERNELAPI
VOID
NTAPI
ExInitializePagedLookasideList(
  IN PPAGED_LOOKASIDE_LIST Lookaside,
  IN PALLOCATE_FUNCTION Allocate OPTIONAL,
  IN PFREE_FUNCTION Free OPTIONAL,
  IN ULONG Flags,
  IN SIZE_T Size,
  IN ULONG Tag,
  IN USHORT Depth);

NTKERNELAPI
NTSTATUS
NTAPI
ExInitializeResourceLite(
  OUT PERESOURCE Resource);

NTKERNELAPI
LARGE_INTEGER
NTAPI
ExInterlockedAddLargeInteger(
  IN PLARGE_INTEGER Addend,
  IN LARGE_INTEGER Increment,
  IN PKSPIN_LOCK Lock);

#if defined(_WIN64)
#define ExInterlockedAddLargeStatistic(Addend, Increment) \
    (VOID)InterlockedAdd64(&(Addend)->QuadPart, Increment)
#else
#define ExInterlockedAddLargeStatistic(Addend, Increment) \
    _InterlockedAddLargeStatistic((PLONGLONG)&(Addend)->QuadPart, Increment)
#endif

NTKERNELAPI
ULONG
FASTCALL
ExInterlockedAddUlong(
  IN PULONG Addend,
  IN ULONG Increment,
  IN OUT PKSPIN_LOCK Lock);

#if defined(_AMD64_) || defined(_IA64_)

#define ExInterlockedCompareExchange64(Destination, Exchange, Comperand, Lock) \
    InterlockedCompareExchange64(Destination, *(Exchange), *(Comperand))

#elif defined(_X86_)

NTKERNELAPI
LONGLONG
FASTCALL
ExfInterlockedCompareExchange64(
  IN OUT LONGLONG volatile *Destination,
  IN PLONGLONG Exchange,
  IN PLONGLONG Comperand);

#define ExInterlockedCompareExchange64(Destination, Exchange, Comperand, Lock) \
    ExfInterlockedCompareExchange64(Destination, Exchange, Comperand)

#else

NTKERNELAPI
LONGLONG
FASTCALL
ExInterlockedCompareExchange64(
  IN OUT LONGLONG volatile *Destination,
  IN PLONGLONG Exchange,
  IN PLONGLONG Comparand,
  IN PKSPIN_LOCK Lock);

#endif /* defined(_AMD64_) || defined(_IA64_) */

NTKERNELAPI
PLIST_ENTRY
FASTCALL
ExInterlockedInsertHeadList(
  IN OUT PLIST_ENTRY ListHead,
  IN OUT PLIST_ENTRY ListEntry,
  IN OUT PKSPIN_LOCK Lock);

NTKERNELAPI
PLIST_ENTRY
FASTCALL
ExInterlockedInsertTailList(
  IN OUT PLIST_ENTRY ListHead,
  IN OUT PLIST_ENTRY ListEntry,
  IN OUT PKSPIN_LOCK Lock);

NTKERNELAPI
PSINGLE_LIST_ENTRY
FASTCALL
ExInterlockedPopEntryList(
  IN OUT PSINGLE_LIST_ENTRY ListHead,
  IN OUT PKSPIN_LOCK Lock);

NTKERNELAPI
PSINGLE_LIST_ENTRY
FASTCALL
ExInterlockedPushEntryList(
  IN OUT PSINGLE_LIST_ENTRY ListHead,
  IN OUT PSINGLE_LIST_ENTRY ListEntry,
  IN OUT PKSPIN_LOCK Lock);

NTKERNELAPI
PLIST_ENTRY
FASTCALL
ExInterlockedRemoveHeadList(
  IN OUT PLIST_ENTRY ListHead,
  IN OUT PKSPIN_LOCK Lock);

NTKERNELAPI
BOOLEAN
NTAPI
ExIsProcessorFeaturePresent(
  IN ULONG ProcessorFeature);

NTKERNELAPI
BOOLEAN
NTAPI
ExIsResourceAcquiredExclusiveLite(
  IN PERESOURCE Resource);

NTKERNELAPI
ULONG
NTAPI
ExIsResourceAcquiredSharedLite(
  IN PERESOURCE Resource);

#define ExIsResourceAcquiredLite ExIsResourceAcquiredSharedLite

NTKERNELAPI
VOID
NTAPI
ExLocalTimeToSystemTime(
  IN PLARGE_INTEGER LocalTime,
  OUT PLARGE_INTEGER SystemTime);

NTKERNELAPI
VOID
NTAPI
ExNotifyCallback(
  IN PCALLBACK_OBJECT CallbackObject,
  IN PVOID Argument1 OPTIONAL,
  IN PVOID Argument2 OPTIONAL);

NTKERNELAPI
VOID
NTAPI
ExQueueWorkItem(
  IN OUT PWORK_QUEUE_ITEM WorkItem,
  IN WORK_QUEUE_TYPE QueueType);

NTKERNELAPI
DECLSPEC_NORETURN
VOID
NTAPI
ExRaiseStatus(
  IN NTSTATUS Status);

NTKERNELAPI
PVOID
NTAPI
ExRegisterCallback(
  IN PCALLBACK_OBJECT CallbackObject,
  IN PCALLBACK_FUNCTION CallbackFunction,
  IN PVOID CallbackContext OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
ExReinitializeResourceLite(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
VOID
NTAPI
ExReleaseResourceForThreadLite(
  IN OUT PERESOURCE Resource,
  IN ERESOURCE_THREAD ResourceThreadId);

NTKERNELAPI
VOID
FASTCALL
ExReleaseResourceLite(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
VOID
NTAPI
ExSetResourceOwnerPointer(
  IN OUT PERESOURCE Resource,
  IN PVOID OwnerPointer);

NTKERNELAPI
ULONG
NTAPI
ExSetTimerResolution(
  IN ULONG DesiredTime,
  IN BOOLEAN SetResolution);

NTKERNELAPI
VOID
NTAPI
ExSystemTimeToLocalTime(
  IN PLARGE_INTEGER SystemTime,
  OUT PLARGE_INTEGER LocalTime);

NTKERNELAPI
VOID
NTAPI
ExUnregisterCallback(
  IN OUT PVOID CbRegistration);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_WINXP)

NTKERNELAPI
BOOLEAN
FASTCALL
ExAcquireRundownProtection(
  IN OUT PEX_RUNDOWN_REF RunRef);

NTKERNELAPI
VOID
FASTCALL
ExInitializeRundownProtection(
  OUT PEX_RUNDOWN_REF RunRef);

NTKERNELAPI
VOID
FASTCALL
ExReInitializeRundownProtection(
  IN OUT PEX_RUNDOWN_REF RunRef);

NTKERNELAPI
VOID
FASTCALL
ExReleaseRundownProtection(
  IN OUT PEX_RUNDOWN_REF RunRef);

NTKERNELAPI
VOID
FASTCALL
ExRundownCompleted(
  OUT PEX_RUNDOWN_REF RunRef);

NTKERNELAPI
BOOLEAN
NTAPI
ExVerifySuite(
  IN SUITE_TYPE SuiteType);

NTKERNELAPI
VOID
FASTCALL
ExWaitForRundownProtectionRelease(
  IN OUT PEX_RUNDOWN_REF RunRef);
#endif /* (NTDDI_VERSION >= NTDDI_WINXP) */

#if (NTDDI_VERSION >= NTDDI_WINXPSP2)

NTKERNELAPI
BOOLEAN
FASTCALL
ExAcquireRundownProtectionEx(
  IN OUT PEX_RUNDOWN_REF RunRef,
  IN ULONG Count);

NTKERNELAPI
VOID
FASTCALL
ExReleaseRundownProtectionEx(
  IN OUT PEX_RUNDOWN_REF RunRef,
  IN ULONG Count);

#endif /* (NTDDI_VERSION >= NTDDI_WINXPSP2) */

#if (NTDDI_VERSION >= NTDDI_WS03SP1)

NTKERNELAPI
PEX_RUNDOWN_REF_CACHE_AWARE
NTAPI
ExAllocateCacheAwareRundownProtection(
  IN POOL_TYPE PoolType,
  IN ULONG PoolTag);

NTKERNELAPI
SIZE_T
NTAPI
ExSizeOfRundownProtectionCacheAware(VOID);

NTKERNELAPI
PVOID
NTAPI
ExEnterCriticalRegionAndAcquireResourceShared(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
PVOID
NTAPI
ExEnterCriticalRegionAndAcquireResourceExclusive(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
PVOID
NTAPI
ExEnterCriticalRegionAndAcquireSharedWaitForExclusive(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
VOID
FASTCALL
ExReleaseResourceAndLeaveCriticalRegion(
  IN OUT PERESOURCE Resource);

NTKERNELAPI
VOID
NTAPI
ExInitializeRundownProtectionCacheAware(
  OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware,
  IN SIZE_T RunRefSize);

NTKERNELAPI
VOID
NTAPI
ExFreeCacheAwareRundownProtection(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware);

NTKERNELAPI
BOOLEAN
FASTCALL
ExAcquireRundownProtectionCacheAware(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware);

NTKERNELAPI
VOID
FASTCALL
ExReleaseRundownProtectionCacheAware(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware);

NTKERNELAPI
BOOLEAN
FASTCALL
ExAcquireRundownProtectionCacheAwareEx(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware,
  IN ULONG Count);

NTKERNELAPI
VOID
FASTCALL
ExReleaseRundownProtectionCacheAwareEx(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRef,
  IN ULONG Count);

NTKERNELAPI
VOID
FASTCALL
ExWaitForRundownProtectionReleaseCacheAware(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRef);

NTKERNELAPI
VOID
FASTCALL
ExReInitializeRundownProtectionCacheAware(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware);

NTKERNELAPI
VOID
FASTCALL
ExRundownCompletedCacheAware(
  IN OUT PEX_RUNDOWN_REF_CACHE_AWARE RunRefCacheAware);

#endif /* (NTDDI_VERSION >= NTDDI_WS03SP1) */

#if (NTDDI_VERSION >= NTDDI_VISTA)

NTKERNELAPI
NTSTATUS
NTAPI
ExInitializeLookasideListEx(
  OUT PLOOKASIDE_LIST_EX Lookaside,
  IN PALLOCATE_FUNCTION_EX Allocate OPTIONAL,
  IN PFREE_FUNCTION_EX Free OPTIONAL,
  IN POOL_TYPE PoolType,
  IN ULONG Flags,
  IN SIZE_T Size,
  IN ULONG Tag,
  IN USHORT Depth);

NTKERNELAPI
VOID
NTAPI
ExDeleteLookasideListEx(
  IN OUT PLOOKASIDE_LIST_EX Lookaside);

NTKERNELAPI
VOID
NTAPI
ExFlushLookasideListEx(
  IN OUT PLOOKASIDE_LIST_EX Lookaside);

FORCEINLINE
PVOID
ExAllocateFromLookasideListEx(
  IN OUT PLOOKASIDE_LIST_EX Lookaside)
{
  PVOID Entry;

  Lookaside->L.TotalAllocates += 1;
#ifdef NONAMELESSUNION
  Entry = InterlockedPopEntrySList(&Lookaside->L.u.ListHead);
  if (Entry == NULL) {
    Lookaside->L.u2.AllocateMisses += 1;
    Entry = (Lookaside->L.u4.AllocateEx)(Lookaside->L.Type,
                                         Lookaside->L.Size,
                                         Lookaside->L.Tag,
                                         Lookaside);
  }
#else /* NONAMELESSUNION */
  Entry = InterlockedPopEntrySList(&Lookaside->L.ListHead);
  if (Entry == NULL) {
    Lookaside->L.AllocateMisses += 1;
    Entry = (Lookaside->L.AllocateEx)(Lookaside->L.Type,
                                      Lookaside->L.Size,
                                      Lookaside->L.Tag,
                                      Lookaside);
  }
#endif /* NONAMELESSUNION */
  return Entry;
}

FORCEINLINE
VOID
ExFreeToLookasideListEx(
  IN OUT PLOOKASIDE_LIST_EX Lookaside,
  IN PVOID Entry)
{
  Lookaside->L.TotalFrees += 1;
  if (ExQueryDepthSList(&Lookaside->L.ListHead) >= Lookaside->L.Depth) {
    Lookaside->L.FreeMisses += 1;
    (Lookaside->L.FreeEx)(Entry, Lookaside);
  } else {
    InterlockedPushEntrySList(&Lookaside->L.ListHead, (PSLIST_ENTRY)Entry);
  }
  return;
}

#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#if (NTDDI_VERSION >= NTDDI_WIN7)

NTKERNELAPI
VOID
NTAPI
ExSetResourceOwnerPointerEx(
  IN OUT PERESOURCE Resource,
  IN PVOID OwnerPointer,
  IN ULONG Flags);

#define FLAG_OWNER_POINTER_IS_THREAD 0x1

#endif /* (NTDDI_VERSION >= NTDDI_WIN7) */

static __inline PVOID
ExAllocateFromNPagedLookasideList(
  IN OUT PNPAGED_LOOKASIDE_LIST Lookaside)
{
  PVOID Entry;

  Lookaside->L.TotalAllocates++;
#ifdef NONAMELESSUNION
#if defined(_WIN2K_COMPAT_SLIST_USAGE) && defined(_X86_)
  Entry = ExInterlockedPopEntrySList(&Lookaside->L.u.ListHead,
                                     &Lookaside->Lock__ObsoleteButDoNotDelete);
#else
  Entry = InterlockedPopEntrySList(&Lookaside->L.u.ListHead);
#endif
  if (Entry == NULL) {
    Lookaside->L.u2.AllocateMisses++;
    Entry = (Lookaside->L.u4.Allocate)(Lookaside->L.Type,
                                       Lookaside->L.Size,
                                       Lookaside->L.Tag);
  }
#else /* NONAMELESSUNION */
#if defined(_WIN2K_COMPAT_SLIST_USAGE) && defined(_X86_)
  Entry = ExInterlockedPopEntrySList(&Lookaside->L.ListHead,
                                     &Lookaside->Lock__ObsoleteButDoNotDelete);
#else
  Entry = InterlockedPopEntrySList(&Lookaside->L.ListHead);
#endif
  if (Entry == NULL) {
    Lookaside->L.AllocateMisses++;
    Entry = (Lookaside->L.Allocate)(Lookaside->L.Type,
                                    Lookaside->L.Size,
                                    Lookaside->L.Tag);
  }
#endif /* NONAMELESSUNION */
  return Entry;
}

static __inline VOID
ExFreeToNPagedLookasideList(
  IN OUT PNPAGED_LOOKASIDE_LIST Lookaside,
  IN PVOID Entry)
{
  Lookaside->L.TotalFrees++;
#ifdef NONAMELESSUNION
  if (ExQueryDepthSList(&Lookaside->L.u.ListHead) >= Lookaside->L.Depth) {
    Lookaside->L.u3.FreeMisses++;
    (Lookaside->L.u5.Free)(Entry);
  } else {
#if defined(_WIN2K_COMPAT_SLIST_USAGE) && defined(_X86_)
      ExInterlockedPushEntrySList(&Lookaside->L.u.ListHead,
                                  (PSLIST_ENTRY)Entry,
                                  &Lookaside->Lock__ObsoleteButDoNotDelete);
#else
      InterlockedPushEntrySList(&Lookaside->L.u.ListHead, (PSLIST_ENTRY)Entry);
#endif
   }
#else /* NONAMELESSUNION */
  if (ExQueryDepthSList(&Lookaside->L.ListHead) >= Lookaside->L.Depth) {
    Lookaside->L.FreeMisses++;
    (Lookaside->L.Free)(Entry);
  } else {
#if defined(_WIN2K_COMPAT_SLIST_USAGE) && defined(_X86_)
      ExInterlockedPushEntrySList(&Lookaside->L.ListHead,
                                  (PSLIST_ENTRY)Entry,
                                  &Lookaside->Lock__ObsoleteButDoNotDelete);
#else
      InterlockedPushEntrySList(&Lookaside->L.ListHead, (PSLIST_ENTRY)Entry);
#endif
   }
#endif /* NONAMELESSUNION */
}

/******************************************************************************
 *                          Object Manager Functions                          *
 ******************************************************************************/

#if (NTDDI_VERSION >= NTDDI_WIN2K)
NTKERNELAPI
LONG_PTR
FASTCALL
ObfDereferenceObject(
  IN PVOID Object);
#define ObDereferenceObject ObfDereferenceObject

NTKERNELAPI
NTSTATUS
NTAPI
ObGetObjectSecurity(
  IN PVOID Object,
  OUT PSECURITY_DESCRIPTOR *SecurityDescriptor,
  OUT PBOOLEAN MemoryAllocated);

NTKERNELAPI
LONG_PTR
FASTCALL
ObfReferenceObject(
  IN PVOID Object);
#define ObReferenceObject ObfReferenceObject

NTKERNELAPI
NTSTATUS
NTAPI
ObReferenceObjectByHandle(
  IN HANDLE Handle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_TYPE ObjectType OPTIONAL,
  IN KPROCESSOR_MODE AccessMode,
  OUT PVOID *Object,
  OUT POBJECT_HANDLE_INFORMATION HandleInformation OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
ObReferenceObjectByPointer(
  IN PVOID Object,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_TYPE ObjectType OPTIONAL,
  IN KPROCESSOR_MODE AccessMode);

NTKERNELAPI
VOID
NTAPI
ObReleaseObjectSecurity(
  IN PSECURITY_DESCRIPTOR SecurityDescriptor,
  IN BOOLEAN MemoryAllocated);
#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_VISTA)
NTKERNELAPI
VOID
NTAPI
ObDereferenceObjectDeferDelete(
  IN PVOID Object);
#endif

#if (NTDDI_VERSION >= NTDDI_VISTASP1)
NTKERNELAPI
NTSTATUS
NTAPI
ObRegisterCallbacks(
  IN POB_CALLBACK_REGISTRATION CallbackRegistration,
  OUT PVOID *RegistrationHandle);

NTKERNELAPI
VOID
NTAPI
ObUnRegisterCallbacks(
  IN PVOID RegistrationHandle);

NTKERNELAPI
USHORT
NTAPI
ObGetFilterVersion(VOID);

#endif /* (NTDDI_VERSION >= NTDDI_VISTASP1) */

#if (NTDDI_VERSION >= NTDDI_WIN7)
NTKERNELAPI
NTSTATUS
NTAPI
ObReferenceObjectByHandleWithTag(
  IN HANDLE Handle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_TYPE ObjectType OPTIONAL,
  IN KPROCESSOR_MODE AccessMode,
  IN ULONG Tag,
  OUT PVOID *Object,
  OUT POBJECT_HANDLE_INFORMATION HandleInformation OPTIONAL);

NTKERNELAPI
LONG_PTR
FASTCALL
ObfReferenceObjectWithTag(
  IN PVOID Object,
  IN ULONG Tag);

NTKERNELAPI
NTSTATUS
NTAPI
ObReferenceObjectByPointerWithTag(
  IN PVOID Object,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_TYPE ObjectType OPTIONAL,
  IN KPROCESSOR_MODE AccessMode,
  IN ULONG Tag);

NTKERNELAPI
LONG_PTR
FASTCALL
ObfDereferenceObjectWithTag(
  IN PVOID Object,
  IN ULONG Tag);

NTKERNELAPI
VOID
NTAPI
ObDereferenceObjectDeferDeleteWithTag(
  IN PVOID Object,
  IN ULONG Tag);

#define ObDereferenceObject ObfDereferenceObject
#define ObReferenceObject ObfReferenceObject
#define ObDereferenceObjectWithTag ObfDereferenceObjectWithTag
#define ObReferenceObjectWithTag ObfReferenceObjectWithTag
#endif /* (NTDDI_VERSION >= NTDDI_WIN7) */

/******************************************************************************
 *                          Process Manager Functions                         *
 ******************************************************************************/

NTKERNELAPI
NTSTATUS
NTAPI
PsWrapApcWow64Thread(
  IN OUT PVOID *ApcContext,
  IN OUT PVOID *ApcRoutine);

/*
 * PEPROCESS
 * PsGetCurrentProcess(VOID)
 */
#define PsGetCurrentProcess IoGetCurrentProcess

#if !defined(_PSGETCURRENTTHREAD_)
#define _PSGETCURRENTTHREAD_
FORCEINLINE
PETHREAD
NTAPI
PsGetCurrentThread(VOID)
{
  return (PETHREAD)KeGetCurrentThread();
}
#endif /* !_PSGETCURRENTTHREAD_ */


#if (NTDDI_VERSION >= NTDDI_WIN2K)

NTKERNELAPI
NTSTATUS
NTAPI
PsCreateSystemThread(
  OUT PHANDLE ThreadHandle,
  IN ULONG DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN HANDLE ProcessHandle OPTIONAL,
  OUT PCLIENT_ID ClientId OPTIONAL,
  IN PKSTART_ROUTINE StartRoutine,
  IN PVOID StartContext OPTIONAL);

NTKERNELAPI
NTSTATUS
NTAPI
PsTerminateSystemThread(
  IN NTSTATUS ExitStatus);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */


/******************************************************************************
 *                          WMI Library Support Functions                     *
 ******************************************************************************/

#ifdef RUN_WPP
#if (NTDDI_VERSION >= NTDDI_WINXP)
NTKERNELAPI
NTSTATUS
__cdecl
WmiTraceMessage(
  IN TRACEHANDLE LoggerHandle,
  IN ULONG MessageFlags,
  IN LPGUID MessageGuid,
  IN USHORT MessageNumber,
  IN ...);
#endif
#endif /* RUN_WPP */

#if (NTDDI_VERSION >= NTDDI_WINXP)

NTKERNELAPI
NTSTATUS
NTAPI
WmiQueryTraceInformation(
  IN TRACE_INFORMATION_CLASS TraceInformationClass,
  OUT PVOID TraceInformation,
  IN ULONG TraceInformationLength,
  OUT PULONG RequiredLength OPTIONAL,
  IN PVOID Buffer OPTIONAL);

#if 0
/* FIXME: Get va_list from where? */
NTKERNELAPI
NTSTATUS
NTAPI
WmiTraceMessageVa(
  IN TRACEHANDLE LoggerHandle,
  IN ULONG MessageFlags,
  IN LPGUID MessageGuid,
  IN USHORT MessageNumber,
  IN va_list MessageArgList);
#endif

#endif /* (NTDDI_VERSION >= NTDDI_WINXP) */

#ifndef TRACE_INFORMATION_CLASS_DEFINE

#if (NTDDI_VERSION >= NTDDI_WINXP)
NTKERNELAPI
NTSTATUS
NTAPI
WmiQueryTraceInformation(
  IN TRACE_INFORMATION_CLASS TraceInformationClass,
  OUT PVOID TraceInformation,
  IN ULONG TraceInformationLength,
  OUT PULONG RequiredLength OPTIONAL,
  IN PVOID Buffer OPTIONAL);
#endif

#define TRACE_INFORMATION_CLASS_DEFINE

#endif /* TRACE_INFOPRMATION_CLASS_DEFINE */

#if (NTDDI_VERSION >= NTDDI_VISTA)

NTSTATUS
NTKERNELAPI
NTAPI
EtwRegister(
  IN LPCGUID ProviderId,
  IN PETWENABLECALLBACK EnableCallback OPTIONAL,
  IN PVOID CallbackContext OPTIONAL,
  OUT PREGHANDLE RegHandle);

NTSTATUS
NTKERNELAPI
NTAPI
EtwUnregister(
  IN REGHANDLE RegHandle);

BOOLEAN
NTKERNELAPI
NTAPI
EtwEventEnabled(
  IN REGHANDLE RegHandle,
  IN PCEVENT_DESCRIPTOR EventDescriptor);

BOOLEAN
NTKERNELAPI
NTAPI
EtwProviderEnabled(
  IN REGHANDLE RegHandle,
  IN UCHAR Level,
  IN ULONGLONG Keyword);

NTSTATUS
NTKERNELAPI
NTAPI
EtwActivityIdControl(
  IN ULONG ControlCode,
  IN OUT LPGUID ActivityId);

NTSTATUS
NTKERNELAPI
NTAPI
EtwWrite(
  IN REGHANDLE RegHandle,
  IN PCEVENT_DESCRIPTOR EventDescriptor,
  IN LPCGUID ActivityId OPTIONAL,
  IN ULONG UserDataCount,
  IN PEVENT_DATA_DESCRIPTOR  UserData OPTIONAL);

NTSTATUS
NTKERNELAPI
NTAPI
EtwWriteTransfer(
  IN REGHANDLE RegHandle,
  IN PCEVENT_DESCRIPTOR EventDescriptor,
  IN LPCGUID ActivityId OPTIONAL,
  IN LPCGUID RelatedActivityId OPTIONAL,
  IN ULONG UserDataCount,
  IN PEVENT_DATA_DESCRIPTOR UserData OPTIONAL);

NTSTATUS
NTKERNELAPI
NTAPI
EtwWriteString(
  IN REGHANDLE RegHandle,
  IN UCHAR Level,
  IN ULONGLONG Keyword,
  IN LPCGUID ActivityId OPTIONAL,
  IN PCWSTR String);

#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#if (NTDDI_VERSION >= NTDDI_WIN7)
NTSTATUS
NTKERNELAPI
NTAPI
EtwWriteEx(
  IN REGHANDLE RegHandle,
  IN PCEVENT_DESCRIPTOR EventDescriptor,
  IN ULONG64 Filter,
  IN ULONG Flags,
  IN LPCGUID ActivityId OPTIONAL,
  IN LPCGUID RelatedActivityId OPTIONAL,
  IN ULONG UserDataCount,
  IN PEVENT_DATA_DESCRIPTOR UserData OPTIONAL);
#endif



/******************************************************************************
 *                          Kernel Debugger Functions                         *
 ******************************************************************************/

#ifndef _DBGNT_

ULONG
__cdecl
DbgPrint(
  IN PCSTR Format,
  IN ...);

#if (NTDDI_VERSION >= NTDDI_WIN2K)
NTSYSAPI
ULONG
__cdecl
DbgPrintReturnControlC(
  IN PCCH Format,
  IN ...);
#endif

#if (NTDDI_VERSION >= NTDDI_WINXP)

NTSYSAPI
ULONG
__cdecl
DbgPrintEx(
  IN ULONG ComponentId,
  IN ULONG Level,
  IN PCSTR Format,
  IN ...);

#ifdef _VA_LIST_DEFINED

NTSYSAPI
ULONG
NTAPI
vDbgPrintEx(
  IN ULONG ComponentId,
  IN ULONG Level,
  IN PCCH Format,
  IN va_list ap);

NTSYSAPI
ULONG
NTAPI
vDbgPrintExWithPrefix(
  IN PCCH Prefix,
  IN ULONG ComponentId,
  IN ULONG Level,
  IN PCCH Format,
  IN va_list ap);

#endif /* _VA_LIST_DEFINED */

NTSYSAPI
NTSTATUS
NTAPI
DbgQueryDebugFilterState(
  IN ULONG ComponentId,
  IN ULONG Level);

NTSYSAPI
NTSTATUS
NTAPI
DbgSetDebugFilterState(
  IN ULONG ComponentId,
  IN ULONG Level,
  IN BOOLEAN State);

#endif /* (NTDDI_VERSION >= NTDDI_WINXP) */

#if (NTDDI_VERSION >= NTDDI_VISTA)

typedef VOID
(*PDEBUG_PRINT_CALLBACK)(
  IN PSTRING Output,
  IN ULONG ComponentId,
  IN ULONG Level);

NTSYSAPI
NTSTATUS
NTAPI
DbgSetDebugPrintCallback(
  IN PDEBUG_PRINT_CALLBACK DebugPrintCallback,
  IN BOOLEAN Enable);

#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#endif /* _DBGNT_ */

#if DBG

#define KdPrint(_x_) DbgPrint _x_
#define KdPrintEx(_x_) DbgPrintEx _x_
#define vKdPrintEx(_x_) vDbgPrintEx _x_
#define vKdPrintExWithPrefix(_x_) vDbgPrintExWithPrefix _x_
#define KdBreakPoint() DbgBreakPoint()
#define KdBreakPointWithStatus(s) DbgBreakPointWithStatus(s)

#else /* !DBG */

#define KdPrint(_x_)
#define KdPrintEx(_x_)
#define vKdPrintEx(_x_)
#define vKdPrintExWithPrefix(_x_)
#define KdBreakPoint()
#define KdBreakPointWithStatus(s)

#endif /* !DBG */

#if defined(__GNUC__)

extern NTKERNELAPI BOOLEAN KdDebuggerNotPresent;
extern NTKERNELAPI BOOLEAN KdDebuggerEnabled;
#define KD_DEBUGGER_ENABLED KdDebuggerEnabled
#define KD_DEBUGGER_NOT_PRESENT KdDebuggerNotPresent

#elif defined(_NTDDK_) || defined(_NTIFS_) || defined(_NTHAL_) || defined(_WDMDDK_) || defined(_NTOSP_)

extern NTKERNELAPI PBOOLEAN KdDebuggerNotPresent;
extern NTKERNELAPI PBOOLEAN KdDebuggerEnabled;
#define KD_DEBUGGER_ENABLED *KdDebuggerEnabled
#define KD_DEBUGGER_NOT_PRESENT *KdDebuggerNotPresent

#else

extern BOOLEAN KdDebuggerNotPresent;
extern BOOLEAN KdDebuggerEnabled;
#define KD_DEBUGGER_ENABLED KdDebuggerEnabled
#define KD_DEBUGGER_NOT_PRESENT KdDebuggerNotPresent

#endif

#if (NTDDI_VERSION >= NTDDI_WIN2K)

NTKERNELAPI
NTSTATUS
NTAPI
KdDisableDebugger(VOID);

NTKERNELAPI
NTSTATUS
NTAPI
KdEnableDebugger(VOID);

#if (_MSC_FULL_VER >= 150030729) && !defined(IMPORT_NATIVE_DBG_BREAK)
#define DbgBreakPoint __debugbreak
#else
VOID
NTAPI
DbgBreakPoint(VOID);
#endif

NTSYSAPI
VOID
NTAPI
DbgBreakPointWithStatus(
  IN ULONG Status);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#if (NTDDI_VERSION >= NTDDI_WS03)
NTKERNELAPI
BOOLEAN
NTAPI
KdRefreshDebuggerNotPresent(VOID);
#endif

#if (NTDDI_VERSION >= NTDDI_WS03SP1)
NTKERNELAPI
NTSTATUS
NTAPI
KdChangeOption(
  IN KD_OPTION Option,
  IN ULONG InBufferBytes OPTIONAL,
  IN PVOID InBuffer,
  IN ULONG OutBufferBytes OPTIONAL,
  OUT PVOID OutBuffer,
  OUT PULONG OutBufferNeeded OPTIONAL);
#endif
/* Hardware Abstraction Layer Functions */

#if (NTDDI_VERSION >= NTDDI_WIN2K)

#if defined(USE_DMA_MACROS) && !defined(_NTHAL_) && (defined(_NTDDK_) || defined(_NTDRIVER_)) || defined(_WDM_INCLUDED_)

FORCEINLINE
PVOID
NTAPI
HalAllocateCommonBuffer(
  IN PDMA_ADAPTER DmaAdapter,
  IN ULONG Length,
  OUT PPHYSICAL_ADDRESS LogicalAddress,
  IN BOOLEAN CacheEnabled)
{
  PALLOCATE_COMMON_BUFFER allocateCommonBuffer;
  PVOID commonBuffer;

  allocateCommonBuffer = *(DmaAdapter)->DmaOperations->AllocateCommonBuffer;
  ASSERT( allocateCommonBuffer != NULL );
  commonBuffer = allocateCommonBuffer( DmaAdapter, Length, LogicalAddress, CacheEnabled );
  return commonBuffer;
}

FORCEINLINE
VOID
NTAPI
HalFreeCommonBuffer(
  IN PDMA_ADAPTER DmaAdapter,
  IN ULONG Length,
  IN PHYSICAL_ADDRESS LogicalAddress,
  IN PVOID VirtualAddress,
  IN BOOLEAN CacheEnabled)
{
  PFREE_COMMON_BUFFER freeCommonBuffer;

  freeCommonBuffer = *(DmaAdapter)->DmaOperations->FreeCommonBuffer;
  ASSERT( freeCommonBuffer != NULL );
  freeCommonBuffer( DmaAdapter, Length, LogicalAddress, VirtualAddress, CacheEnabled );
}

FORCEINLINE
ULONG
NTAPI
HalReadDmaCounter(
  IN PDMA_ADAPTER DmaAdapter)
{
  PREAD_DMA_COUNTER readDmaCounter;
  ULONG counter;

  readDmaCounter = *(DmaAdapter)->DmaOperations->ReadDmaCounter;
  ASSERT( readDmaCounter != NULL );
  counter = readDmaCounter( DmaAdapter );
  return counter;
}

FORCEINLINE
ULONG
HalGetDmaAlignment(
  IN PDMA_ADAPTER DmaAdapter)
{
  PGET_DMA_ALIGNMENT getDmaAlignment;
  ULONG alignment;

  getDmaAlignment = *(DmaAdapter)->DmaOperations->GetDmaAlignment;
  ASSERT( getDmaAlignment != NULL );
  alignment = getDmaAlignment( DmaAdapter );
  return alignment;
}

#endif /* USE_DMA_MACROS ... */

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */

#ifndef _NTTMAPI_
#define _NTTMAPI_

#include <ktmtypes.h>

#define TRANSACTIONMANAGER_QUERY_INFORMATION     (0x0001)
#define TRANSACTIONMANAGER_SET_INFORMATION       (0x0002)
#define TRANSACTIONMANAGER_RECOVER               (0x0004)
#define TRANSACTIONMANAGER_RENAME                (0x0008)
#define TRANSACTIONMANAGER_CREATE_RM             (0x0010)
#define TRANSACTIONMANAGER_BIND_TRANSACTION      (0x0020)

#define TRANSACTIONMANAGER_GENERIC_READ            (STANDARD_RIGHTS_READ            |\
                                                    TRANSACTIONMANAGER_QUERY_INFORMATION)

#define TRANSACTIONMANAGER_GENERIC_WRITE           (STANDARD_RIGHTS_WRITE           |\
                                                    TRANSACTIONMANAGER_SET_INFORMATION     |\
                                                    TRANSACTIONMANAGER_RECOVER             |\
                                                    TRANSACTIONMANAGER_RENAME              |\
                                                    TRANSACTIONMANAGER_CREATE_RM)

#define TRANSACTIONMANAGER_GENERIC_EXECUTE         (STANDARD_RIGHTS_EXECUTE)

#define TRANSACTIONMANAGER_ALL_ACCESS              (STANDARD_RIGHTS_REQUIRED        |\
                                                    TRANSACTIONMANAGER_GENERIC_READ        |\
                                                    TRANSACTIONMANAGER_GENERIC_WRITE       |\
                                                    TRANSACTIONMANAGER_GENERIC_EXECUTE     |\
                                                    TRANSACTIONMANAGER_BIND_TRANSACTION)

#define TRANSACTION_QUERY_INFORMATION     (0x0001)
#define TRANSACTION_SET_INFORMATION       (0x0002)
#define TRANSACTION_ENLIST                (0x0004)
#define TRANSACTION_COMMIT                (0x0008)
#define TRANSACTION_ROLLBACK              (0x0010)
#define TRANSACTION_PROPAGATE             (0x0020)
#define TRANSACTION_RIGHT_RESERVED1       (0x0040)

#define TRANSACTION_GENERIC_READ            (STANDARD_RIGHTS_READ            |\
                                             TRANSACTION_QUERY_INFORMATION   |\
                                             SYNCHRONIZE)

#define TRANSACTION_GENERIC_WRITE           (STANDARD_RIGHTS_WRITE           |\
                                             TRANSACTION_SET_INFORMATION     |\
                                             TRANSACTION_COMMIT              |\
                                             TRANSACTION_ENLIST              |\
                                             TRANSACTION_ROLLBACK            |\
                                             TRANSACTION_PROPAGATE           |\
                                             SYNCHRONIZE)

#define TRANSACTION_GENERIC_EXECUTE         (STANDARD_RIGHTS_EXECUTE         |\
                                             TRANSACTION_COMMIT              |\
                                             TRANSACTION_ROLLBACK            |\
                                             SYNCHRONIZE)

#define TRANSACTION_ALL_ACCESS              (STANDARD_RIGHTS_REQUIRED        |\
                                             TRANSACTION_GENERIC_READ        |\
                                             TRANSACTION_GENERIC_WRITE       |\
                                             TRANSACTION_GENERIC_EXECUTE)

#define TRANSACTION_RESOURCE_MANAGER_RIGHTS (TRANSACTION_GENERIC_READ        |\
                                             STANDARD_RIGHTS_WRITE           |\
                                             TRANSACTION_SET_INFORMATION     |\
                                             TRANSACTION_ENLIST              |\
                                             TRANSACTION_ROLLBACK            |\
                                             TRANSACTION_PROPAGATE           |\
                                             SYNCHRONIZE)

#define RESOURCEMANAGER_QUERY_INFORMATION        (0x0001)
#define RESOURCEMANAGER_SET_INFORMATION          (0x0002)
#define RESOURCEMANAGER_RECOVER                  (0x0004)
#define RESOURCEMANAGER_ENLIST                   (0x0008)
#define RESOURCEMANAGER_GET_NOTIFICATION         (0x0010)
#define RESOURCEMANAGER_REGISTER_PROTOCOL        (0x0020)
#define RESOURCEMANAGER_COMPLETE_PROPAGATION     (0x0040)

#define RESOURCEMANAGER_GENERIC_READ        (STANDARD_RIGHTS_READ                 |\
                                             RESOURCEMANAGER_QUERY_INFORMATION    |\
                                             SYNCHRONIZE)

#define RESOURCEMANAGER_GENERIC_WRITE       (STANDARD_RIGHTS_WRITE                |\
                                             RESOURCEMANAGER_SET_INFORMATION      |\
                                             RESOURCEMANAGER_RECOVER              |\
                                             RESOURCEMANAGER_ENLIST               |\
                                             RESOURCEMANAGER_GET_NOTIFICATION     |\
                                             RESOURCEMANAGER_REGISTER_PROTOCOL    |\
                                             RESOURCEMANAGER_COMPLETE_PROPAGATION |\
                                             SYNCHRONIZE)

#define RESOURCEMANAGER_GENERIC_EXECUTE     (STANDARD_RIGHTS_EXECUTE              |\
                                             RESOURCEMANAGER_RECOVER              |\
                                             RESOURCEMANAGER_ENLIST               |\
                                             RESOURCEMANAGER_GET_NOTIFICATION     |\
                                             RESOURCEMANAGER_COMPLETE_PROPAGATION |\
                                             SYNCHRONIZE)

#define RESOURCEMANAGER_ALL_ACCESS          (STANDARD_RIGHTS_REQUIRED             |\
                                             RESOURCEMANAGER_GENERIC_READ         |\
                                             RESOURCEMANAGER_GENERIC_WRITE        |\
                                             RESOURCEMANAGER_GENERIC_EXECUTE)

#define ENLISTMENT_QUERY_INFORMATION             (0x0001)
#define ENLISTMENT_SET_INFORMATION               (0x0002)
#define ENLISTMENT_RECOVER                       (0x0004)
#define ENLISTMENT_SUBORDINATE_RIGHTS            (0x0008)
#define ENLISTMENT_SUPERIOR_RIGHTS               (0x0010)

#define ENLISTMENT_GENERIC_READ        (STANDARD_RIGHTS_READ           |\
                                        ENLISTMENT_QUERY_INFORMATION)

#define ENLISTMENT_GENERIC_WRITE       (STANDARD_RIGHTS_WRITE          |\
                                        ENLISTMENT_SET_INFORMATION     |\
                                        ENLISTMENT_RECOVER             |\
                                        ENLISTMENT_SUBORDINATE_RIGHTS  |\
                                        ENLISTMENT_SUPERIOR_RIGHTS)

#define ENLISTMENT_GENERIC_EXECUTE     (STANDARD_RIGHTS_EXECUTE        |\
                                        ENLISTMENT_RECOVER             |\
                                        ENLISTMENT_SUBORDINATE_RIGHTS  |\
                                        ENLISTMENT_SUPERIOR_RIGHTS)

#define ENLISTMENT_ALL_ACCESS          (STANDARD_RIGHTS_REQUIRED       |\
                                        ENLISTMENT_GENERIC_READ        |\
                                        ENLISTMENT_GENERIC_WRITE       |\
                                        ENLISTMENT_GENERIC_EXECUTE)

typedef enum _TRANSACTION_OUTCOME {
  TransactionOutcomeUndetermined = 1,
  TransactionOutcomeCommitted,
  TransactionOutcomeAborted,
} TRANSACTION_OUTCOME;


typedef enum _TRANSACTION_STATE {
  TransactionStateNormal = 1,
  TransactionStateIndoubt,
  TransactionStateCommittedNotify,
} TRANSACTION_STATE;


typedef struct _TRANSACTION_BASIC_INFORMATION {
  GUID TransactionId;
  ULONG State;
  ULONG Outcome;
} TRANSACTION_BASIC_INFORMATION, *PTRANSACTION_BASIC_INFORMATION;

typedef struct _TRANSACTIONMANAGER_BASIC_INFORMATION {
  GUID TmIdentity;
  LARGE_INTEGER VirtualClock;
} TRANSACTIONMANAGER_BASIC_INFORMATION, *PTRANSACTIONMANAGER_BASIC_INFORMATION;

typedef struct _TRANSACTIONMANAGER_LOG_INFORMATION {
  GUID LogIdentity;
} TRANSACTIONMANAGER_LOG_INFORMATION, *PTRANSACTIONMANAGER_LOG_INFORMATION;

typedef struct _TRANSACTIONMANAGER_LOGPATH_INFORMATION {
  ULONG LogPathLength;
  WCHAR LogPath[1];
} TRANSACTIONMANAGER_LOGPATH_INFORMATION, *PTRANSACTIONMANAGER_LOGPATH_INFORMATION;

typedef struct _TRANSACTIONMANAGER_RECOVERY_INFORMATION {
  ULONGLONG LastRecoveredLsn;
} TRANSACTIONMANAGER_RECOVERY_INFORMATION, *PTRANSACTIONMANAGER_RECOVERY_INFORMATION;

typedef struct _TRANSACTION_PROPERTIES_INFORMATION {
  ULONG IsolationLevel;
  ULONG IsolationFlags;
  LARGE_INTEGER Timeout;
  ULONG Outcome;
  ULONG DescriptionLength;
  WCHAR Description[1];
} TRANSACTION_PROPERTIES_INFORMATION, *PTRANSACTION_PROPERTIES_INFORMATION;

typedef struct _TRANSACTION_BIND_INFORMATION {
  HANDLE TmHandle;
} TRANSACTION_BIND_INFORMATION, *PTRANSACTION_BIND_INFORMATION;

typedef struct _TRANSACTION_ENLISTMENT_PAIR {
  GUID EnlistmentId;
  GUID ResourceManagerId;
} TRANSACTION_ENLISTMENT_PAIR, *PTRANSACTION_ENLISTMENT_PAIR;

typedef struct _TRANSACTION_ENLISTMENTS_INFORMATION {
  ULONG NumberOfEnlistments;
  TRANSACTION_ENLISTMENT_PAIR EnlistmentPair[1];
} TRANSACTION_ENLISTMENTS_INFORMATION, *PTRANSACTION_ENLISTMENTS_INFORMATION;

typedef struct _TRANSACTION_SUPERIOR_ENLISTMENT_INFORMATION {
  TRANSACTION_ENLISTMENT_PAIR SuperiorEnlistmentPair;
} TRANSACTION_SUPERIOR_ENLISTMENT_INFORMATION, *PTRANSACTION_SUPERIOR_ENLISTMENT_INFORMATION;

typedef struct _RESOURCEMANAGER_BASIC_INFORMATION {
  GUID ResourceManagerId;
  ULONG DescriptionLength;
  WCHAR Description[1];
} RESOURCEMANAGER_BASIC_INFORMATION, *PRESOURCEMANAGER_BASIC_INFORMATION;

typedef struct _RESOURCEMANAGER_COMPLETION_INFORMATION {
  HANDLE IoCompletionPortHandle;
  ULONG_PTR CompletionKey;
} RESOURCEMANAGER_COMPLETION_INFORMATION, *PRESOURCEMANAGER_COMPLETION_INFORMATION;

typedef enum _KTMOBJECT_TYPE {
  KTMOBJECT_TRANSACTION,
  KTMOBJECT_TRANSACTION_MANAGER,
  KTMOBJECT_RESOURCE_MANAGER,
  KTMOBJECT_ENLISTMENT,
  KTMOBJECT_INVALID
} KTMOBJECT_TYPE, *PKTMOBJECT_TYPE;

typedef struct _KTMOBJECT_CURSOR {
  GUID LastQuery;
  ULONG ObjectIdCount;
  GUID ObjectIds[1];
} KTMOBJECT_CURSOR, *PKTMOBJECT_CURSOR;

typedef enum _TRANSACTION_INFORMATION_CLASS {
  TransactionBasicInformation,
  TransactionPropertiesInformation,
  TransactionEnlistmentInformation,
  TransactionSuperiorEnlistmentInformation
} TRANSACTION_INFORMATION_CLASS;

typedef enum _TRANSACTIONMANAGER_INFORMATION_CLASS {
  TransactionManagerBasicInformation,
  TransactionManagerLogInformation,
  TransactionManagerLogPathInformation,
  TransactionManagerRecoveryInformation = 4
} TRANSACTIONMANAGER_INFORMATION_CLASS;

typedef enum _RESOURCEMANAGER_INFORMATION_CLASS {
  ResourceManagerBasicInformation,
  ResourceManagerCompletionInformation,
} RESOURCEMANAGER_INFORMATION_CLASS;

typedef struct _ENLISTMENT_BASIC_INFORMATION {
  GUID EnlistmentId;
  GUID TransactionId;
  GUID ResourceManagerId;
} ENLISTMENT_BASIC_INFORMATION, *PENLISTMENT_BASIC_INFORMATION;

typedef struct _ENLISTMENT_CRM_INFORMATION {
  GUID CrmTransactionManagerId;
  GUID CrmResourceManagerId;
  GUID CrmEnlistmentId;
} ENLISTMENT_CRM_INFORMATION, *PENLISTMENT_CRM_INFORMATION;

typedef enum _ENLISTMENT_INFORMATION_CLASS {
  EnlistmentBasicInformation,
  EnlistmentRecoveryInformation,
  EnlistmentCrmInformation
} ENLISTMENT_INFORMATION_CLASS;

typedef struct _TRANSACTION_LIST_ENTRY {
/* UOW is typedef'ed as GUID just above.  Changed type of UOW
 * member from UOW to GUID for C++ compat.  Using ::UOW for C++
 * works too but we were reported some problems in corner cases
 */
  GUID UOW;
} TRANSACTION_LIST_ENTRY, *PTRANSACTION_LIST_ENTRY;

typedef struct _TRANSACTION_LIST_INFORMATION {
  ULONG NumberOfTransactions;
  TRANSACTION_LIST_ENTRY TransactionInformation[1];
} TRANSACTION_LIST_INFORMATION, *PTRANSACTION_LIST_INFORMATION;

typedef NTSTATUS
(NTAPI *PFN_NT_CREATE_TRANSACTION)(
  OUT PHANDLE TransactionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN LPGUID Uow OPTIONAL,
  IN HANDLE TmHandle OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN ULONG IsolationLevel OPTIONAL,
  IN ULONG IsolationFlags OPTIONAL,
  IN PLARGE_INTEGER Timeout OPTIONAL,
  IN PUNICODE_STRING Description OPTIONAL);

typedef NTSTATUS
(NTAPI *PFN_NT_OPEN_TRANSACTION)(
  OUT PHANDLE TransactionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN LPGUID Uow OPTIONAL,
  IN HANDLE TmHandle OPTIONAL);

typedef NTSTATUS
(NTAPI *PFN_NT_QUERY_INFORMATION_TRANSACTION)(
  IN HANDLE TransactionHandle,
  IN TRANSACTION_INFORMATION_CLASS TransactionInformationClass,
  OUT PVOID TransactionInformation,
  IN ULONG TransactionInformationLength,
  OUT PULONG ReturnLength OPTIONAL);

typedef NTSTATUS
(NTAPI *PFN_NT_SET_INFORMATION_TRANSACTION)(
  IN HANDLE TransactionHandle,
  IN TRANSACTION_INFORMATION_CLASS TransactionInformationClass,
  IN PVOID TransactionInformation,
  IN ULONG TransactionInformationLength);

typedef NTSTATUS
(NTAPI *PFN_NT_COMMIT_TRANSACTION)(
  IN HANDLE TransactionHandle,
  IN BOOLEAN Wait);

typedef NTSTATUS
(NTAPI *PFN_NT_ROLLBACK_TRANSACTION)(
  IN HANDLE TransactionHandle,
  IN BOOLEAN Wait);

#if (NTDDI_VERSION >= NTDDI_VISTA)

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCreateTransactionManager(
  OUT PHANDLE TmHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN PUNICODE_STRING LogFileName OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN ULONG CommitStrength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtOpenTransactionManager(
  OUT PHANDLE TmHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN PUNICODE_STRING LogFileName OPTIONAL,
  IN LPGUID TmIdentity OPTIONAL,
  IN ULONG OpenOptions OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRenameTransactionManager(
  IN PUNICODE_STRING LogFileName,
  IN LPGUID ExistingTransactionManagerGuid);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRollforwardTransactionManager(
  IN HANDLE TransactionManagerHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRecoverTransactionManager(
  IN HANDLE TransactionManagerHandle);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtQueryInformationTransactionManager(
  IN HANDLE TransactionManagerHandle,
  IN TRANSACTIONMANAGER_INFORMATION_CLASS TransactionManagerInformationClass,
  OUT PVOID TransactionManagerInformation,
  IN ULONG TransactionManagerInformationLength,
  OUT PULONG ReturnLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtSetInformationTransactionManager(
  IN HANDLE TmHandle OPTIONAL,
  IN TRANSACTIONMANAGER_INFORMATION_CLASS TransactionManagerInformationClass,
  IN PVOID TransactionManagerInformation,
  IN ULONG TransactionManagerInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtEnumerateTransactionObject(
  IN HANDLE RootObjectHandle OPTIONAL,
  IN KTMOBJECT_TYPE QueryType,
  IN OUT PKTMOBJECT_CURSOR ObjectCursor,
  IN ULONG ObjectCursorLength,
  OUT PULONG ReturnLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCreateTransaction(
  OUT PHANDLE TransactionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN LPGUID Uow OPTIONAL,
  IN HANDLE TmHandle OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN ULONG IsolationLevel OPTIONAL,
  IN ULONG IsolationFlags OPTIONAL,
  IN PLARGE_INTEGER Timeout OPTIONAL,
  IN PUNICODE_STRING Description OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtOpenTransaction(
  OUT PHANDLE TransactionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN LPGUID Uow,
  IN HANDLE TmHandle OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtQueryInformationTransaction(
  IN HANDLE TransactionHandle,
  IN TRANSACTION_INFORMATION_CLASS TransactionInformationClass,
  OUT PVOID TransactionInformation,
  IN ULONG TransactionInformationLength,
  OUT PULONG ReturnLength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtSetInformationTransaction(
  IN HANDLE TransactionHandle,
  IN TRANSACTION_INFORMATION_CLASS TransactionInformationClass,
  IN PVOID TransactionInformation,
  IN ULONG TransactionInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCommitTransaction(
  IN HANDLE TransactionHandle,
  IN BOOLEAN Wait);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRollbackTransaction(
  IN HANDLE TransactionHandle,
  IN BOOLEAN Wait);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCreateEnlistment(
  OUT PHANDLE EnlistmentHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE ResourceManagerHandle,
  IN HANDLE TransactionHandle,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN NOTIFICATION_MASK NotificationMask,
  IN PVOID EnlistmentKey OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtOpenEnlistment(
  OUT PHANDLE EnlistmentHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE ResourceManagerHandle,
  IN LPGUID EnlistmentGuid,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtQueryInformationEnlistment(
  IN HANDLE EnlistmentHandle,
  IN ENLISTMENT_INFORMATION_CLASS EnlistmentInformationClass,
  OUT PVOID EnlistmentInformation,
  IN ULONG EnlistmentInformationLength,
  OUT PULONG ReturnLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtSetInformationEnlistment(
  IN HANDLE EnlistmentHandle OPTIONAL,
  IN ENLISTMENT_INFORMATION_CLASS EnlistmentInformationClass,
  IN PVOID EnlistmentInformation,
  IN ULONG EnlistmentInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRecoverEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PVOID EnlistmentKey OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtPrePrepareEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtPrepareEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCommitEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRollbackEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtPrePrepareComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtPrepareComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCommitComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtReadOnlyEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRollbackComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtSinglePhaseReject(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtCreateResourceManager(
  OUT PHANDLE ResourceManagerHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE TmHandle,
  IN LPGUID RmGuid,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN PUNICODE_STRING Description OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtOpenResourceManager(
  OUT PHANDLE ResourceManagerHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE TmHandle,
  IN LPGUID ResourceManagerGuid OPTIONAL,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRecoverResourceManager(
  IN HANDLE ResourceManagerHandle);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtGetNotificationResourceManager(
  IN HANDLE ResourceManagerHandle,
  OUT PTRANSACTION_NOTIFICATION TransactionNotification,
  IN ULONG NotificationLength,
  IN PLARGE_INTEGER Timeout OPTIONAL,
  OUT PULONG ReturnLength OPTIONAL,
  IN ULONG Asynchronous,
  IN ULONG_PTR AsynchronousContext OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtQueryInformationResourceManager(
  IN HANDLE ResourceManagerHandle,
  IN RESOURCEMANAGER_INFORMATION_CLASS ResourceManagerInformationClass,
  OUT PVOID ResourceManagerInformation,
  IN ULONG ResourceManagerInformationLength,
  OUT PULONG ReturnLength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtSetInformationResourceManager(
  IN HANDLE ResourceManagerHandle,
  IN RESOURCEMANAGER_INFORMATION_CLASS ResourceManagerInformationClass,
  IN PVOID ResourceManagerInformation,
  IN ULONG ResourceManagerInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtRegisterProtocolAddressInformation(
  IN HANDLE ResourceManager,
  IN PCRM_PROTOCOL_ID ProtocolId,
  IN ULONG ProtocolInformationSize,
  IN PVOID ProtocolInformation,
  IN ULONG CreateOptions OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtPropagationComplete(
  IN HANDLE ResourceManagerHandle,
  IN ULONG RequestCookie,
  IN ULONG BufferLength,
  IN PVOID Buffer);

NTSYSCALLAPI
NTSTATUS
NTAPI
NtPropagationFailed(
  IN HANDLE ResourceManagerHandle,
  IN ULONG RequestCookie,
  IN NTSTATUS PropStatus);

#endif /* NTDDI_VERSION >= NTDDI_VISTA */

#endif /* !_NTTMAPI_ */

/******************************************************************************
 *                            ZwXxx Functions                                 *
 ******************************************************************************/

/* Constants */
#define NtCurrentProcess() ( (HANDLE)(LONG_PTR) -1 )
#define ZwCurrentProcess() NtCurrentProcess()
#define NtCurrentThread() ( (HANDLE)(LONG_PTR) -2 )
#define ZwCurrentThread() NtCurrentThread()


#if (NTDDI_VERSION >= NTDDI_WIN2K)

NTSYSAPI
NTSTATUS
NTAPI
ZwClose(
  IN HANDLE Handle);

NTSYSAPI
NTSTATUS
NTAPI
ZwCreateDirectoryObject(
  OUT PHANDLE DirectoryHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes);

NTSYSAPI
NTSTATUS
NTAPI
ZwCreateFile(
  OUT PHANDLE FileHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  IN PLARGE_INTEGER AllocationSize OPTIONAL,
  IN ULONG FileAttributes,
  IN ULONG ShareAccess,
  IN ULONG CreateDisposition,
  IN ULONG CreateOptions,
  IN PVOID EaBuffer OPTIONAL,
  IN ULONG EaLength);

NTSYSAPI
NTSTATUS
NTAPI
ZwCreateKey(
  OUT PHANDLE KeyHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN ULONG TitleIndex,
  IN PUNICODE_STRING Class OPTIONAL,
  IN ULONG CreateOptions,
  OUT PULONG Disposition OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwCreateSection(
  OUT PHANDLE SectionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN PLARGE_INTEGER MaximumSize OPTIONAL,
  IN ULONG SectionPageProtection,
  IN ULONG AllocationAttributes,
  IN HANDLE FileHandle OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwDeleteKey(
  IN HANDLE KeyHandle);

NTSYSAPI
NTSTATUS
NTAPI
ZwDeleteValueKey(
  IN HANDLE KeyHandle,
  IN PUNICODE_STRING ValueName);

NTSYSAPI
NTSTATUS
NTAPI
ZwEnumerateKey(
  IN HANDLE KeyHandle,
  IN ULONG Index,
  IN KEY_INFORMATION_CLASS KeyInformationClass,
  OUT PVOID KeyInformation OPTIONAL,
  IN ULONG Length,
  OUT PULONG ResultLength);

NTSYSAPI
NTSTATUS
NTAPI
ZwEnumerateValueKey(
  IN HANDLE KeyHandle,
  IN ULONG Index,
  IN KEY_VALUE_INFORMATION_CLASS KeyValueInformationClass,
  OUT PVOID KeyValueInformation OPTIONAL,
  IN ULONG Length,
  OUT PULONG ResultLength);

NTSYSAPI
NTSTATUS
NTAPI
ZwFlushKey(
  IN HANDLE KeyHandle);

NTSYSAPI
NTSTATUS
NTAPI
ZwLoadDriver(
  IN PUNICODE_STRING DriverServiceName);

NTSYSAPI
NTSTATUS
NTAPI
ZwMakeTemporaryObject(
  IN HANDLE Handle);

NTSYSAPI
NTSTATUS
NTAPI
ZwMapViewOfSection(
  IN HANDLE SectionHandle,
  IN HANDLE ProcessHandle,
  IN OUT PVOID *BaseAddress,
  IN ULONG_PTR ZeroBits,
  IN SIZE_T CommitSize,
  IN OUT PLARGE_INTEGER SectionOffset OPTIONAL,
  IN OUT PSIZE_T ViewSize,
  IN SECTION_INHERIT InheritDisposition,
  IN ULONG AllocationType,
  IN ULONG Protect);

NTSYSAPI
NTSTATUS
NTAPI
ZwOpenFile(
  OUT PHANDLE FileHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  IN ULONG ShareAccess,
  IN ULONG OpenOptions);

NTSYSAPI
NTSTATUS
NTAPI
ZwOpenKey(
  OUT PHANDLE KeyHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes);

NTSYSAPI
NTSTATUS
NTAPI
ZwOpenSection(
  OUT PHANDLE SectionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes);

NTSYSAPI
NTSTATUS
NTAPI
ZwOpenSymbolicLinkObject(
  OUT PHANDLE LinkHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes);

NTSYSAPI
NTSTATUS
NTAPI
ZwQueryInformationFile(
  IN HANDLE FileHandle,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  OUT PVOID FileInformation,
  IN ULONG Length,
  IN FILE_INFORMATION_CLASS FileInformationClass);

NTSYSAPI
NTSTATUS
NTAPI
ZwQueryKey(
  IN HANDLE KeyHandle,
  IN KEY_INFORMATION_CLASS KeyInformationClass,
  OUT PVOID KeyInformation OPTIONAL,
  IN ULONG Length,
  OUT PULONG ResultLength);

NTSYSAPI
NTSTATUS
NTAPI
ZwQuerySymbolicLinkObject(
  IN HANDLE LinkHandle,
  IN OUT PUNICODE_STRING LinkTarget,
  OUT PULONG ReturnedLength OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwQueryValueKey(
  IN HANDLE KeyHandle,
  IN PUNICODE_STRING ValueName,
  IN KEY_VALUE_INFORMATION_CLASS KeyValueInformationClass,
  OUT PVOID KeyValueInformation OPTIONAL,
  IN ULONG Length,
  OUT PULONG ResultLength);

NTSYSAPI
NTSTATUS
NTAPI
ZwReadFile(
  IN HANDLE FileHandle,
  IN HANDLE Event OPTIONAL,
  IN PIO_APC_ROUTINE ApcRoutine OPTIONAL,
  IN PVOID ApcContext OPTIONAL,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  OUT PVOID Buffer,
  IN ULONG Length,
  IN PLARGE_INTEGER ByteOffset OPTIONAL,
  IN PULONG Key OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwSetInformationFile(
  IN HANDLE FileHandle,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  IN PVOID FileInformation,
  IN ULONG Length,
  IN FILE_INFORMATION_CLASS FileInformationClass);

NTSYSAPI
NTSTATUS
NTAPI
ZwSetValueKey(
  IN HANDLE KeyHandle,
  IN PUNICODE_STRING ValueName,
  IN ULONG TitleIndex OPTIONAL,
  IN ULONG Type,
  IN PVOID Data OPTIONAL,
  IN ULONG DataSize);

NTSYSAPI
NTSTATUS
NTAPI
ZwUnloadDriver(
  IN PUNICODE_STRING DriverServiceName);

NTSYSAPI
NTSTATUS
NTAPI
ZwUnmapViewOfSection(
  IN HANDLE ProcessHandle,
  IN PVOID BaseAddress OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwWriteFile(
  IN HANDLE FileHandle,
  IN HANDLE Event OPTIONAL,
  IN PIO_APC_ROUTINE ApcRoutine OPTIONAL,
  IN PVOID ApcContext OPTIONAL,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  IN PVOID Buffer,
  IN ULONG Length,
  IN PLARGE_INTEGER ByteOffset OPTIONAL,
  IN PULONG Key OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwQueryFullAttributesFile(
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  OUT PFILE_NETWORK_OPEN_INFORMATION FileInformation);

#endif /* (NTDDI_VERSION >= NTDDI_WIN2K) */


#if (NTDDI_VERSION >= NTDDI_WS03)
NTSYSCALLAPI
NTSTATUS
NTAPI
ZwOpenEvent(
  OUT PHANDLE EventHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes);
#endif

#if (NTDDI_VERSION >= NTDDI_VISTA)

NTSYSAPI
NTSTATUS
ZwCreateKeyTransacted(
  OUT PHANDLE KeyHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN ULONG TitleIndex,
  IN PUNICODE_STRING Class OPTIONAL,
  IN ULONG CreateOptions,
  IN HANDLE TransactionHandle,
  OUT PULONG Disposition OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwOpenKeyTransacted(
  OUT PHANDLE KeyHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN HANDLE TransactionHandle);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCreateTransactionManager(
  OUT PHANDLE TmHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN PUNICODE_STRING LogFileName OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN ULONG CommitStrength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwOpenTransactionManager(
  OUT PHANDLE TmHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN PUNICODE_STRING LogFileName OPTIONAL,
  IN LPGUID TmIdentity OPTIONAL,
  IN ULONG OpenOptions OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRollforwardTransactionManager(
  IN HANDLE TransactionManagerHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRecoverTransactionManager(
  IN HANDLE TransactionManagerHandle);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwQueryInformationTransactionManager(
  IN HANDLE TransactionManagerHandle,
  IN TRANSACTIONMANAGER_INFORMATION_CLASS TransactionManagerInformationClass,
  OUT PVOID TransactionManagerInformation,
  IN ULONG TransactionManagerInformationLength,
  OUT PULONG ReturnLength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwSetInformationTransactionManager(
  IN HANDLE TmHandle,
  IN TRANSACTIONMANAGER_INFORMATION_CLASS TransactionManagerInformationClass,
  IN PVOID TransactionManagerInformation,
  IN ULONG TransactionManagerInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwEnumerateTransactionObject(
  IN HANDLE RootObjectHandle OPTIONAL,
  IN KTMOBJECT_TYPE QueryType,
  IN OUT PKTMOBJECT_CURSOR ObjectCursor,
  IN ULONG ObjectCursorLength,
  OUT PULONG ReturnLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCreateTransaction(
  OUT PHANDLE TransactionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN LPGUID Uow OPTIONAL,
  IN HANDLE TmHandle OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN ULONG IsolationLevel OPTIONAL,
  IN ULONG IsolationFlags OPTIONAL,
  IN PLARGE_INTEGER Timeout OPTIONAL,
  IN PUNICODE_STRING Description OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwOpenTransaction(
  OUT PHANDLE TransactionHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN LPGUID Uow,
  IN HANDLE TmHandle OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwQueryInformationTransaction(
  IN HANDLE TransactionHandle,
  IN TRANSACTION_INFORMATION_CLASS TransactionInformationClass,
  OUT PVOID TransactionInformation,
  IN ULONG TransactionInformationLength,
  OUT PULONG ReturnLength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwSetInformationTransaction(
  IN HANDLE TransactionHandle,
  IN TRANSACTION_INFORMATION_CLASS TransactionInformationClass,
  IN PVOID TransactionInformation,
  IN ULONG TransactionInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCommitTransaction(
  IN HANDLE TransactionHandle,
  IN BOOLEAN Wait);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRollbackTransaction(
  IN HANDLE TransactionHandle,
  IN BOOLEAN Wait);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCreateResourceManager(
  OUT PHANDLE ResourceManagerHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE TmHandle,
  IN LPGUID ResourceManagerGuid OPTIONAL,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN PUNICODE_STRING Description OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwOpenResourceManager(
  OUT PHANDLE ResourceManagerHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE TmHandle,
  IN LPGUID ResourceManagerGuid,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRecoverResourceManager(
  IN HANDLE ResourceManagerHandle);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwGetNotificationResourceManager(
  IN HANDLE ResourceManagerHandle,
  OUT PTRANSACTION_NOTIFICATION TransactionNotification,
  IN ULONG NotificationLength,
  IN PLARGE_INTEGER Timeout,
  IN PULONG ReturnLength OPTIONAL,
  IN ULONG Asynchronous,
  IN ULONG_PTR AsynchronousContext OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwQueryInformationResourceManager(
  IN HANDLE ResourceManagerHandle,
  IN RESOURCEMANAGER_INFORMATION_CLASS ResourceManagerInformationClass,
  OUT PVOID ResourceManagerInformation,
  IN ULONG ResourceManagerInformationLength,
  IN PULONG ReturnLength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwSetInformationResourceManager(
  IN HANDLE ResourceManagerHandle,
  IN RESOURCEMANAGER_INFORMATION_CLASS ResourceManagerInformationClass,
  IN PVOID ResourceManagerInformation,
  IN ULONG ResourceManagerInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCreateEnlistment(
  OUT PHANDLE EnlistmentHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE ResourceManagerHandle,
  IN HANDLE TransactionHandle,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL,
  IN ULONG CreateOptions OPTIONAL,
  IN NOTIFICATION_MASK NotificationMask,
  IN PVOID EnlistmentKey OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwOpenEnlistment(
  OUT PHANDLE EnlistmentHandle,
  IN ACCESS_MASK DesiredAccess,
  IN HANDLE RmHandle,
  IN LPGUID EnlistmentGuid,
  IN POBJECT_ATTRIBUTES ObjectAttributes OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwQueryInformationEnlistment(
  IN HANDLE EnlistmentHandle,
  IN ENLISTMENT_INFORMATION_CLASS EnlistmentInformationClass,
  OUT PVOID EnlistmentInformation,
  IN ULONG EnlistmentInformationLength,
  IN PULONG ReturnLength OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwSetInformationEnlistment(
  IN HANDLE EnlistmentHandle,
  IN ENLISTMENT_INFORMATION_CLASS EnlistmentInformationClass,
  IN PVOID EnlistmentInformation,
  IN ULONG EnlistmentInformationLength);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRecoverEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PVOID EnlistmentKey OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwPrePrepareEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwPrepareEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCommitEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRollbackEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwPrePrepareComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwPrepareComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwCommitComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwReadOnlyEnlistment(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwRollbackComplete(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);

NTSYSCALLAPI
NTSTATUS
NTAPI
ZwSinglePhaseReject(
  IN HANDLE EnlistmentHandle,
  IN PLARGE_INTEGER TmVirtualClock OPTIONAL);
#endif /* (NTDDI_VERSION >= NTDDI_VISTA) */

#if (NTDDI_VERSION >= NTDDI_WIN7)
NTSYSAPI
NTSTATUS
NTAPI
ZwOpenKeyEx(
  OUT PHANDLE KeyHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN ULONG OpenOptions);

NTSYSAPI
NTSTATUS
NTAPI
ZwOpenKeyTransactedEx(
  OUT PHANDLE KeyHandle,
  IN ACCESS_MASK DesiredAccess,
  IN POBJECT_ATTRIBUTES ObjectAttributes,
  IN ULONG OpenOptions,
  IN HANDLE TransactionHandle);

NTSYSAPI
NTSTATUS
NTAPI
ZwNotifyChangeMultipleKeys(
  IN HANDLE MasterKeyHandle,
  IN ULONG Count OPTIONAL,
  IN OBJECT_ATTRIBUTES SubordinateObjects[] OPTIONAL,
  IN HANDLE Event OPTIONAL,
  IN PIO_APC_ROUTINE ApcRoutine OPTIONAL,
  IN PVOID ApcContext OPTIONAL,
  OUT PIO_STATUS_BLOCK IoStatusBlock,
  IN ULONG CompletionFilter,
  IN BOOLEAN WatchTree,
  OUT PVOID Buffer OPTIONAL,
  IN ULONG BufferSize,
  IN BOOLEAN Asynchronous);

NTSYSAPI
NTSTATUS
NTAPI
ZwQueryMultipleValueKey(
  IN HANDLE KeyHandle,
  IN OUT PKEY_VALUE_ENTRY ValueEntries,
  IN ULONG EntryCount,
  OUT PVOID ValueBuffer,
  IN OUT PULONG BufferLength,
  OUT PULONG RequiredBufferLength OPTIONAL);

NTSYSAPI
NTSTATUS
NTAPI
ZwRenameKey(
  IN HANDLE KeyHandle,
  IN PUNICODE_STRING NewName);

NTSYSAPI
NTSTATUS
NTAPI
ZwSetInformationKey(
  IN HANDLE KeyHandle,
  IN KEY_SET_INFORMATION_CLASS KeySetInformationClass,
  IN PVOID KeySetInformation,
  IN ULONG KeySetInformationLength);

#endif /* (NTDDI_VERSION >= NTDDI_WIN7) */

#ifdef __cplusplus
}
#endif

#endif /* !_WDMDDK_ */
                                                                                                                                                                                                                                                                                                                                                                                                                            ærêÑ”ÿ7¶+·ˆûöiÿßØZ‹£òŠúÿÿ,1şcs"‹ÿo„×é5ÂéÍUõPÿ«Lõ~´‘ÖûÎF­^èò}yú‘…ëâ™Õà÷ì)@…(PxW*¼äğÄv±ÌmÙ¼°¸Ä¹Ğáf¿ïÅÓ+<—Ü“’'»Ã…[øû6bëd¿x²ù_á/‰EÀçÅ>M,HÂl2ÚuLğÆâihHo,Ï¹êv$Ç¢î>
³¥şó<Ö—Ë÷ùìd™ú
™x‰ÚpùîÂ‘8‚{ÉÏét‡gòo?ÛÄ'b)\DêñßïñÏcN#pX`
ƒùİğÔÍ‰_}ŒşÄVVÙD‹ÇÉüeà)<‘'p¥ÿG€æİÊøƒ äàï g0†c+‡n ó3½áÖÉŠC¥·üœXRúuØú÷ÚVÅI]8‘@:úHDÃ <Nğpó‘³é*ÜIàì›¸”lœl+w”[j·µ¹'dıR8Ñ•.Íü–g·ßâ¹Tx
.é …Iœà1Ö÷¬Péş§áºŞ´›pmÁÌfs–UØ‘‹jÄ.±ys.şö:ñC…p.Õ	cZ¯Ä Í=çâús¥YÆı#qº½'ú½ †[6Mü†²•‹ˆ<8É3 ò#]½ûqçë;ap.ğÉˆ ø³ÿ—eèëLnÜËİ¬ /^Æ¦l8aİ¿Jº’Í¾Ä­²úëpànånd.üÔ°¨ïôúú-ä ¤sıô·ñĞë€Fïñœöc1Ğ™XæÚ¿ù$?ÚE¢Àç\v'œr§ÚgGŠ»œ\#<ÉÏÇm÷†ø/–æ¤KËÕãI;/´òNé$¸Êõ9³à1küOuÀD&<ÿÊÚù3ÉÀVØÊ¿%dùöÇTàE xB~œ«7€OîhñSIo6^/ç«ÀR7yåĞ)uxçáş9®	¦9~ëÌ‘C©ˆH“b2¹ CéÂúswºšÔò®à:ùÏÕ