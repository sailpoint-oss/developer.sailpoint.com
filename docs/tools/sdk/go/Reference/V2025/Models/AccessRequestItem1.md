---
id: v2025-access-request-item1
title: AccessRequestItem1
pagination_label: AccessRequestItem1
sidebar_label: AccessRequestItem1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestItem1', 'V2025AccessRequestItem1'] 
slug: /tools/sdk/go/v2025/models/access-request-item1
tags: ['SDK', 'Software Development Kit', 'AccessRequestItem1', 'V2025AccessRequestItem1']
---

# AccessRequestItem1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the item being requested. | 
**Id** | **string** | ID of Role, Access Profile or Entitlement being requested. | 
**Comment** | Pointer to **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date in the future. * The current SLA for the deprovisioning is 24 hours. * This date can be modified to either extend or decrease the duration of access item assignments for the specified identity. You can change the expiration date for requests for yourself or direct reports, but you cannot remove an expiration date on an already approved item. If the access request has not been approved, you can cancel it and submit a new one without the expiration. If it has already been approved, then you have to revoke the access and then re-request without the expiration.  | [optional] 
**AssignmentId** | Pointer to **NullableString** | The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity. * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.  | [optional] 
**NativeIdentity** | Pointer to **NullableString** | The 'distinguishedName' field for an account on the identity, also called nativeIdentity. This nativeIdentity is used to revoke a specific attributeAssignment on the identity. * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.  | [optional] 

## Methods

### NewAccessRequestItem1

`func NewAccessRequestItem1(type_ string, id string, ) *AccessRequestItem1`

NewAccessRequestItem1 instantiates a new AccessRequestItem1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestItem1WithDefaults

`func NewAccessRequestItem1WithDefaults() *AccessRequestItem1`

NewAccessRequestItem1WithDefaults instantiates a new AccessRequestItem1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessRequestItem1) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestItem1) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestItem1) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccessRequestItem1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestItem1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestItem1) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *AccessRequestItem1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestItem1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestItem1) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessRequestItem1) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetClientMetadata

`func (o *AccessRequestItem1) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccessRequestItem1) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccessRequestItem1) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccessRequestItem1) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRemoveDate

`func (o *AccessRequestItem1) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccessRequestItem1) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccessRequestItem1) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccessRequestItem1) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetAssignmentId

`func (o *AccessRequestItem1) GetAssignmentId() string`

GetAssignmentId returns the AssignmentId field if non-nil, zero value otherwise.

### GetAssignmentIdOk

`func (o *AccessRequestItem1) GetAssignmentIdOk() (*string, bool)`

GetAssignmentIdOk returns a tuple with the AssignmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentId

`func (o *AccessRequestItem1) SetAssignmentId(v string)`

SetAssignmentId sets AssignmentId field to given value.

### HasAssignmentId

`func (o *AccessRequestItem1) HasAssignmentId() bool`

HasAssignmentId returns a boolean if a field has been set.

### SetAssignmentIdNil

`func (o *AccessRequestItem1) SetAssignmentIdNil(b bool)`

 SetAssignmentIdNil sets the value for AssignmentId to be an explicit nil

### UnsetAssignmentId
`func (o *AccessRequestItem1) UnsetAssignmentId()`

UnsetAssignmentId ensures that no value is present for AssignmentId, not even an explicit nil
### GetNativeIdentity

`func (o *AccessRequestItem1) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccessRequestItem1) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccessRequestItem1) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccessRequestItem1) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### SetNativeIdentityNil

`func (o *AccessRequestItem1) SetNativeIdentityNil(b bool)`

 SetNativeIdentityNil sets the value for NativeIdentity to be an explicit nil

### UnsetNativeIdentity
`func (o *AccessRequestItem1) UnsetNativeIdentity()`

UnsetNativeIdentity ensures that no value is present for NativeIdentity, not even an explicit nil

