'use client'
import React from "react";
import {CiMail} from "react-icons/ci";
import {IoCallOutline} from "react-icons/io5";
import {FiMapPin} from "react-icons/fi";
import {Flex, Form, Space} from "antd";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import _ from "lodash";

const CheckboxField = ({value, onChange}) => (
    <Flex align='center' gap={8}>
        <Checkbox
            className='data-[state=checked]:bg-[#d57c3d] data-[state=checked]:border-[#d57c3d] data-[state=checked]:text-white'
            checked={value}
            onCheckedChange={onChange}
        />
        <span className='text-sm'>I accept the Terms</span>
    </Flex>
)

const listRooms = [
    {
        title: 'Standard Room',
        description: 'Perfect for solo travelers or couples seeking comfort.',
        price: 75,
    },
    {
        title: 'Standard Room',
        description: 'Perfect for solo travelers or couples seeking comfort.',
        price: 75,
    },
    {
        title: 'Standard Room',
        description: 'Perfect for solo travelers or couples seeking comfort.',
        price: 75,
    },
    {
        title: 'Standard Room',
        description: 'Perfect for solo travelers or couples seeking comfort.',
        price: 75,
    }
]

const listContact = [
    {
        icon: <CiMail/>,
        label: 'info@havennest.com'
    },
    {
        icon: <IoCallOutline/>,
        label: '(555) 123-4567'
    },
    {
        icon: <FiMapPin/>,
        label: '123 Nature Lane, Asheville, NC 28801'
    }
]

const FormContact: React.FC = () => {
    const [form] = Form.useForm()

    return (
        <div className='bg-white flex flex-col items-center'>
            <div className='flex flex-col items-center '>
                <h2 className='text-[42px] font-bold'>Room Rates</h2>
                <div className='text-lg pb-[30px]'>Explore our affordable pricing options for a memorable stay.</div>
                <div className='mt-[40px] flex gap-[20px]'>

                </div>
            </div>
            <div className='flex justify-center items-start gap-[20px] py-[80px] w-[65%]'>
                <div className='flex flex-col gap-[20px] w-1/2'>
                    <h2 className='text-[42px] font-bold'>Get in Touch</h2>
                    <div className='text-lg pb-[30px]'>We’d love to hear from you! Reach out anytime.</div>
                    <Space direction='vertical' size={6}>
                        {listContact.map((c, i) => (
                            <Space size={19}>
                                {c.icon}
                                <span className='text-base'>{c.label}</span>
                            </Space>
                        ))}
                    </Space>
                </div>
                <Form
                    layout='vertical' className='w-1/2'
                    form={form}
                >
                    <Form.Item
                        label={<label className='text-base'>Name</label>} name='name'
                        rules={[
                            {validator: (__, value) => {
                                if (_.isEmpty(value)) return Promise.reject('Please enter your name')
                                return Promise.resolve()
                            }}
                        ]}
                    >
                        <Input placeholder='Enter your name'/>
                    </Form.Item>
                    <Form.Item
                        label={<label className='text-base'>Email</label>} name='email'
                        rules={[
                            {validator: (__, value) => {
                                    if (_.isEmpty(value)) return Promise.reject('Please enter your email')
                                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return Promise.reject('Email is not valid')
                                    return Promise.resolve()
                            }}
                        ]}
                    >
                        <Input placeholder='Enter your email'/>
                    </Form.Item>
                    <Form.Item label={<label className='text-base'>Message</label>} name='message'>
                        <Textarea placeholder='Type your message'/>
                    </Form.Item>
                    <Form.Item
                        name='accept'
                        rules={[
                            {validator: (__, value) => {
                                    if (!value) return Promise.reject('Please check this box if you want process')
                                    return Promise.resolve()
                                }}
                        ]}
                    >
                        <CheckboxField/>
                    </Form.Item>
                    <Form.Item>
                        <div
                            className='bg-[#d57c3d] w-fit hover:bg-[#d57c3dCC] py-[12px] px-[24px] text-white text-base rounded-sm cursor-pointer'
                            onClick={() => form.submit()}
                        >
                            Submit
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default FormContact