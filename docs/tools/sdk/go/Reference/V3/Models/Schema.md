---
id: schema
title: Schema
pagination_label: Schema
sidebar_label: Schema
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Schema', 'Schema'] 
slug: /tools/sdk/go/v3/models/schema
tags: ['SDK', 'Software Development Kit', 'Schema', 'Schema']
---

# Schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Schema. | [optional] 
**Name** | Pointer to **string** | The name of the Schema. | [optional] 
**NativeObjectType** | Pointer to **string** | The name of the object type on the native system that the schema represents. | [optional] 
**IdentityAttribute** | Pointer to **string** | The name of the attribute used to calculate the unique identifier for an object in the schema. | [optional] 
**DisplayAttribute** | Pointer to **string** | The name of the attribute used to calculate the display value for an object in the schema. | [optional] 
**HierarchyAttribute** | Pointer to **string** | The name of the attribute whose values represent other objects in a hierarchy. Only relevant to group schemas. | [optional] 
**IncludePermissions** | Pointer to **bool** | Flag indicating whether or not the include permissions with the object data when aggregating the schema. | [optional] [default to false]
**Features** | Pointer to **[]string** | Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors. * AUTHENTICATE: The source supports pass-through authentication. * COMPOSITE: The source supports composite source creation. * DIRECT_PERMISSIONS: The source supports returning DirectPermissions. * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups. * ENABLE The source supports reading if an account is enabled or disabled. * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS. * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform. * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source. * SEARCH * TEMPLATE * UNLOCK: The source supports reading if an account is locked or unlocked. * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets. * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources. * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation. * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented. * SYNC_PROVISIONING: The source can provision accounts synchronously. * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature. * CURRENT_PASSWORD: Some source types support verification of the current password * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements. * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts. * NO_AGGREGATION: A source that does not support aggregation. * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation. * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts. * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups. * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING. * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure. * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning. * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM | [optional] 
**Configuration** | Pointer to **map[string]interface{}** | Holds any extra configuration data that the schema may require. | [optional] 
**Attributes** | Pointer to [**[]AttributeDefinition**](attribute-definition) | The attribute definitions which form the schema. | [optional] 
**Created** | Pointer to **SailPointTime** | The date the Schema was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | The date the Schema was last modified. | [optional] 

## Methods

### NewSchema

`func NewSchema() *Schema`

NewSchema instantiates a new Schema object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaWithDefaults

`func NewSchemaWithDefaults() *Schema`

NewSchemaWithDefaults instantiates a new Schema object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Schema) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Schema) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Schema) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Schema) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Schema) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Schema) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Schema) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Schema) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNativeObjectType

`func (o *Schema) GetNativeObjectType() string`

GetNativeObjectType returns the NativeObjectType field if non-nil, zero value otherwise.

### GetNativeObjectTypeOk

`func (o *Schema) GetNativeObjectTypeOk() (*string, bool)`

GetNativeObjectTypeOk returns a tuple with the NativeObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeObjectType

`func (o *Schema) SetNativeObjectType(v string)`

SetNativeObjectType sets NativeObjectType field to given value.

### HasNativeObjectType

`func (o *Schema) HasNativeObjectType() bool`

HasNativeObjectType returns a boolean if a field has been set.

### GetIdentityAttribute

`func (o *Schema) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *Schema) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *Schema) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *Schema) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.

### GetDisplayAttribute

`func (o *Schema) GetDisplayAttribute() string`

GetDisplayAttribute returns the DisplayAttribute field if non-nil, zero value otherwise.

### GetDisplayAttributeOk

`func (o *Schema) GetDisplayAttributeOk() (*string, bool)`

GetDisplayAttributeOk returns a tuple with the DisplayAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayAttribute

`func (o *Schema) SetDisplayAttribute(v string)`

SetDisplayAttribute sets DisplayAttribute field to given value.

### HasDisplayAttribute

`func (o *Schema) HasDisplayAttribute() bool`

HasDisplayAttribute returns a boolean if a field has been set.

### GetHierarchyAttribute

`func (o *Schema) GetHierarchyAttribute() string`

GetHierarchyAttribute returns the HierarchyAttribute field if non-nil, zero value otherwise.

### GetHierarchyAttributeOk

`func (o *Schema) GetHierarchyAttributeOk() (*string, bool)`

GetHierarchyAttributeOk returns a tuple with the HierarchyAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHierarchyAttribute

`func (o *Schema) SetHierarchyAttribute(v string)`

SetHierarchyAttribute sets HierarchyAttribute field to given value.

### HasHierarchyAttribute

`func (o *Schema) HasHierarchyAttribute() bool`

HasHierarchyAttribute returns a boolean if a field has been set.

### GetIncludePermissions

`func (o *Schema) GetIncludePermissions() bool`

GetIncludePermissions returns the IncludePermissions field if non-nil, zero value otherwise.

### GetIncludePermissionsOk

`func (o *Schema) GetIncludePermissionsOk() (*bool, bool)`

GetIncludePermissionsOk returns a tuple with the IncludePermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludePermissions

`func (o *Schema) SetIncludePermissions(v bool)`

SetIncludePermissions sets IncludePermissions field to given value.

### HasIncludePermissions

`func (o *Schema) HasIncludePermissions() bool`

HasIncludePermissions returns a boolean if a field has been set.

### GetFeatures

`func (o *Schema) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *Schema) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *Schema) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *Schema) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetConfiguration

`func (o *Schema) GetConfiguration() map[string]interface{}`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *Schema) GetConfigurationOk() (*map[string]interface{}, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *Schema) SetConfiguration(v map[string]interface{})`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *Schema) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetAttributes

`func (o *Schema) GetAttributes() []AttributeDefinition`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Schema) GetAttributesOk() (*[]AttributeDefinition, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Schema) SetAttributes(v []AttributeDefinition)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Schema) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetCreated

`func (o *Schema) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Schema) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Schema) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Schema) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Schema) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Schema) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Schema) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Schema) HasModified() bool`

HasModified returns a boolean if a field has been set.


