---
id: connector-detail
title: ConnectorDetail
pagination_label: ConnectorDetail
sidebar_label: ConnectorDetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorDetail', 'ConnectorDetail'] 
slug: /tools/sdk/go//models/connector-detail
tags: ['SDK', 'Software Development Kit', 'ConnectorDetail', 'ConnectorDetail']
---

# ConnectorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The connector name | [optional] 
**Type** | Pointer to **string** | The connector type | [optional] 
**ClassName** | Pointer to **string** | The connector class name | [optional] 
**ScriptName** | Pointer to **string** | The connector script name | [optional] 
**ApplicationXml** | Pointer to **string** | The connector application xml | [optional] 
**CorrelationConfigXml** | Pointer to **string** | The connector correlation config xml | [optional] 
**SourceConfigXml** | Pointer to **string** | The connector source config xml | [optional] 
**SourceConfig** | Pointer to **NullableString** | The connector source config | [optional] 
**SourceConfigFrom** | Pointer to **NullableString** | The connector source config origin | [optional] 
**S3Location** | Pointer to **string** | storage path key for this connector | [optional] 
**UploadedFiles** | Pointer to **[]string** | The list of uploaded files supported by the connector. If there was any executable files uploaded to thee connector. Typically this be empty as the executable be uploaded at source creation. | [optional] 
**FileUpload** | Pointer to **bool** | true if the source is file upload | [optional] [default to false]
**DirectConnect** | Pointer to **bool** | true if the source is a direct connect source | [optional] [default to false]
**TranslationProperties** | Pointer to **map[string]interface{}** | A map containing translation attributes by loacale key | [optional] 
**ConnectorMetadata** | Pointer to **map[string]interface{}** | A map containing metadata pertinent to the UI to be used | [optional] 
**Status** | Pointer to **string** | The connector status | [optional] 

## Methods

### NewConnectorDetail

`func NewConnectorDetail() *ConnectorDetail`

NewConnectorDetail instantiates a new ConnectorDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorDetailWithDefaults

`func NewConnectorDetailWithDefaults() *ConnectorDetail`

NewConnectorDetailWithDefaults instantiates a new ConnectorDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorDetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorDetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorDetail) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectorDetail) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ConnectorDetail) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorDetail) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorDetail) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ConnectorDetail) HasType() bool`

HasType returns a boolean if a field has been set.

### GetClassName

`func (o *ConnectorDetail) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *ConnectorDetail) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *ConnectorDetail) SetClassName(v string)`

SetClassName sets ClassName field to given value.

### HasClassName

`func (o *ConnectorDetail) HasClassName() bool`

HasClassName returns a boolean if a field has been set.

### GetScriptName

`func (o *ConnectorDetail) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *ConnectorDetail) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *ConnectorDetail) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.

### HasScriptName

`func (o *ConnectorDetail) HasScriptName() bool`

HasScriptName returns a boolean if a field has been set.

### GetApplicationXml

`func (o *ConnectorDetail) GetApplicationXml() string`

GetApplicationXml returns the ApplicationXml field if non-nil, zero value otherwise.

### GetApplicationXmlOk

`func (o *ConnectorDetail) GetApplicationXmlOk() (*string, bool)`

GetApplicationXmlOk returns a tuple with the ApplicationXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationXml

`func (o *ConnectorDetail) SetApplicationXml(v string)`

SetApplicationXml sets ApplicationXml field to given value.

### HasApplicationXml

`func (o *ConnectorDetail) HasApplicationXml() bool`

HasApplicationXml returns a boolean if a field has been set.

### GetCorrelationConfigXml

`func (o *ConnectorDetail) GetCorrelationConfigXml() string`

GetCorrelationConfigXml returns the CorrelationConfigXml field if non-nil, zero value otherwise.

### GetCorrelationConfigXmlOk

`func (o *ConnectorDetail) GetCorrelationConfigXmlOk() (*string, bool)`

GetCorrelationConfigXmlOk returns a tuple with the CorrelationConfigXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationConfigXml

`func (o *ConnectorDetail) SetCorrelationConfigXml(v string)`

SetCorrelationConfigXml sets CorrelationConfigXml field to given value.

### HasCorrelationConfigXml

`func (o *ConnectorDetail) HasCorrelationConfigXml() bool`

HasCorrelationConfigXml returns a boolean if a field has been set.

### GetSourceConfigXml

`func (o *ConnectorDetail) GetSourceConfigXml() string`

GetSourceConfigXml returns the SourceConfigXml field if non-nil, zero value otherwise.

### GetSourceConfigXmlOk

`func (o *ConnectorDetail) GetSourceConfigXmlOk() (*string, bool)`

GetSourceConfigXmlOk returns a tuple with the SourceConfigXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceConfigXml

`func (o *ConnectorDetail) SetSourceConfigXml(v string)`

SetSourceConfigXml sets SourceConfigXml field to given value.

### HasSourceConfigXml

`func (o *ConnectorDetail) HasSourceConfigXml() bool`

HasSourceConfigXml returns a boolean if a field has been set.

### GetSourceConfig

`func (o *ConnectorDetail) GetSourceConfig() string`

GetSourceConfig returns the SourceConfig field if non-nil, zero value otherwise.

### GetSourceConfigOk

`func (o *ConnectorDetail) GetSourceConfigOk() (*string, bool)`

GetSourceConfigOk returns a tuple with the SourceConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceConfig

`func (o *ConnectorDetail) SetSourceConfig(v string)`

SetSourceConfig sets SourceConfig field to given value.

### HasSourceConfig

`func (o *ConnectorDetail) HasSourceConfig() bool`

HasSourceConfig returns a boolean if a field has been set.

### SetSourceConfigNil

`func (o *ConnectorDetail) SetSourceConfigNil(b bool)`

 SetSourceConfigNil sets the value for SourceConfig to be an explicit nil

### UnsetSourceConfig
`func (o *ConnectorDetail) UnsetSourceConfig()`

UnsetSourceConfig ensures that no value is present for SourceConfig, not even an explicit nil
### GetSourceConfigFrom

`func (o *ConnectorDetail) GetSourceConfigFrom() string`

GetSourceConfigFrom returns the SourceConfigFrom field if non-nil, zero value otherwise.

### GetSourceConfigFromOk

`func (o *ConnectorDetail) GetSourceConfigFromOk() (*string, bool)`

GetSourceConfigFromOk returns a tuple with the SourceConfigFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceConfigFrom

`func (o *ConnectorDetail) SetSourceConfigFrom(v string)`

SetSourceConfigFrom sets SourceConfigFrom field to given value.

### HasSourceConfigFrom

`func (o *ConnectorDetail) HasSourceConfigFrom() bool`

HasSourceConfigFrom returns a boolean if a field has been set.

### SetSourceConfigFromNil

`func (o *ConnectorDetail) SetSourceConfigFromNil(b bool)`

 SetSourceConfigFromNil sets the value for SourceConfigFrom to be an explicit nil

### UnsetSourceConfigFrom
`func (o *ConnectorDetail) UnsetSourceConfigFrom()`

UnsetSourceConfigFrom ensures that no value is present for SourceConfigFrom, not even an explicit nil
### GetS3Location

`func (o *ConnectorDetail) GetS3Location() string`

GetS3Location returns the S3Location field if non-nil, zero value otherwise.

### GetS3LocationOk

`func (o *ConnectorDetail) GetS3LocationOk() (*string, bool)`

GetS3LocationOk returns a tuple with the S3Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Location

`func (o *ConnectorDetail) SetS3Location(v string)`

SetS3Location sets S3Location field to given value.

### HasS3Location

`func (o *ConnectorDetail) HasS3Location() bool`

HasS3Location returns a boolean if a field has been set.

### GetUploadedFiles

`func (o *ConnectorDetail) GetUploadedFiles() []string`

GetUploadedFiles returns the UploadedFiles field if non-nil, zero value otherwise.

### GetUploadedFilesOk

`func (o *ConnectorDetail) GetUploadedFilesOk() (*[]string, bool)`

GetUploadedFilesOk returns a tuple with the UploadedFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadedFiles

`func (o *ConnectorDetail) SetUploadedFiles(v []string)`

SetUploadedFiles sets UploadedFiles field to given value.

### HasUploadedFiles

`func (o *ConnectorDetail) HasUploadedFiles() bool`

HasUploadedFiles returns a boolean if a field has been set.

### SetUploadedFilesNil

`func (o *ConnectorDetail) SetUploadedFilesNil(b bool)`

 SetUploadedFilesNil sets the value for UploadedFiles to be an explicit nil

### UnsetUploadedFiles
`func (o *ConnectorDetail) UnsetUploadedFiles()`

UnsetUploadedFiles ensures that no value is present for UploadedFiles, not even an explicit nil
### GetFileUpload

`func (o *ConnectorDetail) GetFileUpload() bool`

GetFileUpload returns the FileUpload field if non-nil, zero value otherwise.

### GetFileUploadOk

`func (o *ConnectorDetail) GetFileUploadOk() (*bool, bool)`

GetFileUploadOk returns a tuple with the FileUpload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUpload

`func (o *ConnectorDetail) SetFileUpload(v bool)`

SetFileUpload sets FileUpload field to given value.

### HasFileUpload

`func (o *ConnectorDetail) HasFileUpload() bool`

HasFileUpload returns a boolean if a field has been set.

### GetDirectConnect

`func (o *ConnectorDetail) GetDirectConnect() bool`

GetDirectConnect returns the DirectConnect field if non-nil, zero value otherwise.

### GetDirectConnectOk

`func (o *ConnectorDetail) GetDirectConnectOk() (*bool, bool)`

GetDirectConnectOk returns a tuple with the DirectConnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectConnect

`func (o *ConnectorDetail) SetDirectConnect(v bool)`

SetDirectConnect sets DirectConnect field to given value.

### HasDirectConnect

`func (o *ConnectorDetail) HasDirectConnect() bool`

HasDirectConnect returns a boolean if a field has been set.

### GetTranslationProperties

`func (o *ConnectorDetail) GetTranslationProperties() map[string]interface{}`

GetTranslationProperties returns the TranslationProperties field if non-nil, zero value otherwise.

### GetTranslationPropertiesOk

`func (o *ConnectorDetail) GetTranslationPropertiesOk() (*map[string]interface{}, bool)`

GetTranslationPropertiesOk returns a tuple with the TranslationProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationProperties

`func (o *ConnectorDetail) SetTranslationProperties(v map[string]interface{})`

SetTranslationProperties sets TranslationProperties field to given value.

### HasTranslationProperties

`func (o *ConnectorDetail) HasTranslationProperties() bool`

HasTranslationProperties returns a boolean if a field has been set.

### GetConnectorMetadata

`func (o *ConnectorDetail) GetConnectorMetadata() map[string]interface{}`

GetConnectorMetadata returns the ConnectorMetadata field if non-nil, zero value otherwise.

### GetConnectorMetadataOk

`func (o *ConnectorDetail) GetConnectorMetadataOk() (*map[string]interface{}, bool)`

GetConnectorMetadataOk returns a tuple with the ConnectorMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorMetadata

`func (o *ConnectorDetail) SetConnectorMetadata(v map[string]interface{})`

SetConnectorMetadata sets ConnectorMetadata field to given value.

### HasConnectorMetadata

`func (o *ConnectorDetail) HasConnectorMetadata() bool`

HasConnectorMetadata returns a boolean if a field has been set.

### GetStatus

`func (o *ConnectorDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ConnectorDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ConnectorDetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ConnectorDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


