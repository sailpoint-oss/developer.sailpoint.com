# CampaignReportDownloadResponse

# CampaignReportDownloadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign report. | 
**PresignedUrl** | **string** | A URL to download the campaign report | 

## Methods

### NewCampaignReportDownloadResponse

`func NewCampaignReportDownloadResponse(id string, presignedUrl string, ) *CampaignReportDownloadResponse`

NewCampaignReportDownloadResponse instantiates a new CampaignReportDownloadResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignReportDownloadResponseWithDefaults

`func NewCampaignReportDownloadResponseWithDefaults() *CampaignReportDownloadResponse`

NewCampaignReportDownloadResponseWithDefaults instantiates a new CampaignReportDownloadResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignReportDownloadResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignReportDownloadResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignReportDownloadResponse) SetId(v string)`

SetId sets Id field to given value.


### GetPresignedUrl

`func (o *CampaignReportDownloadResponse) GetPresignedUrl() string`

GetPresignedUrl returns the PresignedUrl field if non-nil, zero value otherwise.

### GetPresignedUrlOk

`func (o *CampaignReportDownloadResponse) GetPresignedUrlOk() (*string, bool)`

GetPresignedUrlOk returns a tuple with the PresignedUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPresignedUrl

`func (o *CampaignReportDownloadResponse) SetPresignedUrl(v string)`

SetPresignedUrl sets PresignedUrl field to given value.



