<?php

namespace Bp\ProfileBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class BpProfileBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
