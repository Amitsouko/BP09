<?php

namespace Bp\CartBundle\EventListener;

use PaymentSuite\PaymentCoreBundle\Event\PaymentOrderLoadEvent;
use PaymentSuite\PaymentCoreBundle\Event\PaymentOrderCreatedEvent;
use PaymentSuite\PaymentCoreBundle\Event\PaymentOrderDoneEvent;
use PaymentSuite\PaymentCoreBundle\Event\PaymentOrderSuccessEvent;
use PaymentSuite\PaymentCoreBundle\Event\PaymentOrderFailEvent;

/**
 * Payment event listener
 *
 * This listener is enabled whatever the payment method is.
 */
class Payment
{
    private $contractService;
    private $user;
    private $paymentBridge;

    public function setContractService($contractService)
    {
        $this->contractService = $contractService;
    }

   public function setUser($user)
    {
        $this->user = $user;
    }

    public function setPaymentBridge($paymentBridge)
    {
        $this->paymentBridge = $paymentBridge;
    }


    /**
     * On payment order load event
     *
     * @param PaymentOrderLoadEvent $paymentOrderLoadEvent Payment Order Load event
     */
    public function onPaymentLoad(PaymentOrderLoadEvent $paymentOrderLoadEvent)
    {
        /*
         * Your code for this event
         */
        $contract = $this->contractService->generateContract($this->user);
        $this->paymentBridge ->setOrder($contract->getOrder());
    }

    /**
     * On payment order created event
     *
     * @param PaymentOrderCreatedEvent $paymentOrderCreatedEvent Payment Order Created event
     */
    public function onPaymentOrderCreated(PaymentOrderCreatedEvent $paymentOrderCreatedEvent)
    {
        /*
         * Your code for this event
         */
    }

    /**
     * On payment done event
     *
     * @param PaymentOrderDoneEvent $paymentOrderDoneEvent Payment Order Done event
     */
    public function onPaymentOrderDone(PaymentOrderDoneEvent $paymentOrderDoneEvent)
    {
        /*
         * Your code for this event
         */
    }

    /**
     * On payment success event
     *
     * @param PaymentOrderSuccessEvent $paymentOrderSuccessEvent Payment Order Success event
     */
    public function onPaymentSuccess(PaymentOrderSuccessEvent $paymentOrderSuccessEvent)
    {
        /*
         * Your code for this event
         */
    }

    /**
     * On payment fail event
     *
     * @param PaymentOrderFailEvent $paymentOrderFailEvent Payment Order Fail event
     */
    public function onPaymentFail(PaymentOrderFailEvent $paymentOrderFailEvent)
    {
        /*
         * Your code for this event
         */
    }
}