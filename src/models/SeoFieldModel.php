<?php

namespace studioespresso\seofields\models;

use craft\base\Model;

class SeoFieldModel extends Model
{
    public $metaTitle;
    public $metaDescription;
    public $siteName;

    public function getTitle() {
        return $this->metaTitle;
    }


    /**
     * @inheritdoc
     */
    public function rules(): array
    {
        return [
            [
                [
                    'metaTitle',
                    'metaDescription',
                    'siteName'
                ],
                'safe',
            ],
        ];
    }
}