---
id: v2024-identity-with-new-access
title: IdentityWithNewAccess
pagination_label: IdentityWithNewAccess
sidebar_label: IdentityWithNewAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityWithNewAccess', 'V2024IdentityWithNewAccess'] 
slug: /tools/sdk/go/v2024/models/identity-with-new-access
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccess', 'V2024IdentityWithNewAccess']
---

# IdentityWithNewAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | Identity id to be checked. | 
**AccessRefs** | [**[]IdentityWithNewAccessAccessRefsInner**](identity-with-new-access-access-refs-inner) | The list of entitlements to consider for possible violations in a preventive check. | 
**SourceIdAndNativeIdToEntitlementIdsMappings** | Pointer to [**[]SourceIdAndNativeIdToEntitlementIdsMapping**](source-id-and-native-id-to-entitlement-ids-mapping) | Mappings between sourceId and nativeId to entitlement IDs for which access is requested. This is only being used for ARM analysis in case of user having multiple accounts on the same source on which entitlement is requested. Optional parameter that helps identify which account the entitlement is requested on. For scenarios where users have a single account on the source and do not provide this field, the available account is chosen. | [optional] 

## Methods

### NewIdentityWithNewAccess

`func NewIdentityWithNewAccess(identityId string, accessRefs []IdentityWithNewAccessAccessRefsInner, ) *IdentityWithNewAccess`

NewIdentityWithNewAccess instantiates a new IdentityWithNewAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityWithNewAccessWithDefaults

`func NewIdentityWithNewAccessWithDefaults() *IdentityWithNewAccess`

NewIdentityWithNewAccessWithDefaults instantiates a new IdentityWithNewAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *IdentityWithNewAccess) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *IdentityWithNewAccess) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *IdentityWithNewAccess) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetAccessRefs

`func (o *IdentityWithNewAccess) GetAccessRefs() []IdentityWithNewAccessAccessRefsInner`

GetAccessRefs returns the AccessRefs field if non-nil, zero value otherwise.

### GetAccessRefsOk

`func (o *IdentityWithNewAccess) GetAccessRefsOk() (*[]IdentityWithNewAccessAccessRefsInner, bool)`

GetAccessRefsOk returns a tuple with the AccessRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRefs

`func (o *IdentityWithNewAccess) SetAccessRefs(v []IdentityWithNewAccessAccessRefsInner)`

SetAccessRefs sets AccessRefs field to given value.


### GetSourceIdAndNativeIdToEntitlementIdsMappings

`func (o *IdentityWithNewAccess) GetSourceIdAndNativeIdToEntitlementIdsMappings() []SourceIdAndNativeIdToEntitlementIdsMapping`

GetSourceIdAndNativeIdToEntitlementIdsMappings returns the SourceIdAndNativeIdToEntitlementIdsMappings field if non-nil, zero value otherwise.

### GetSourceIdAndNativeIdToEntitlementIdsMappingsOk

`func (o *IdentityWithNewAccess) GetSourceIdAndNativeIdToEntitlementIdsMappingsOk() (*[]SourceIdAndNativeIdToEntitlementIdsMapping, bool)`

GetSourceIdAndNativeIdToEntitlementIdsMappingsOk returns a tuple with the SourceIdAndNativeIdToEntitlementIdsMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIdAndNativeIdToEntitlementIdsMappings

`func (o *IdentityWithNewAccess) SetSourceIdAndNativeIdToEntitlementIdsMappings(v []SourceIdAndNativeIdToEntitlementIdsMapping)`

SetSourceIdAndNativeIdToEntitlementIdsMappings sets SourceIdAndNativeIdToEntitlementIdsMappings field to given value.

### HasSourceIdAndNativeIdToEntitlementIdsMappings

`func (o *IdentityWithNewAccess) HasSourceIdAndNativeIdToEntitlementIdsMappings() bool`

HasSourceIdAndNativeIdToEntitlementIdsMappings returns a boolean if a field has been set.


