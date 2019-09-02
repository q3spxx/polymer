import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ModalComponent } from './modal.react.connector';

const ModalWithState = () => {
    const [isOpen, setOpen] = useState(false);
    const [mode, setMode] = useState('#ffffff');
    
    const handleClick = (mode?: string) => () => {
        console.log("TCL: ModalWithState -> isOpen", isOpen)
        setOpen(!isOpen);
        if (mode) {
            setMode(mode);
        }
    }

    const handleClickOnModal = (name: string) => {
        console.log("TCL: handleClick -> name", name)
        setOpen(false);
    }

    return (
        <>
        <ModalComponent onClick={handleClickOnModal} open={isOpen} mode={mode}>
            Custom modal component
        </ModalComponent>
        <div style={{height: 3000, width: 1000, margin: '0 auto', color: '#474A59'}}>
            <p>
                Laboris eiusmod amet Lorem sit deserunt et dolor officia. Veniam non pariatur ex mollit officia nostrud tempor sit sint nulla ea aliqua. Culpa amet aliquip sint laboris ad.
            </p>
            <p>
                Do sunt labore eiusmod non. Consequat consequat in ea consequat ex in dolor velit commodo dolore non id. Proident dolore occaecat quis magna cillum ipsum consectetur. Fugiat ut est fugiat incididunt qui nulla aliquip cupidatat ex consectetur dolore aute sit non. Incididunt magna nulla sint ex dolor non ad irure. Esse excepteur in ut et et quis aute pariatur aliqua culpa dolor. Ad minim aliqua aliquip irure duis ex ea nulla labore incididunt elit occaecat.
            </p>
            <p>
                Sunt culpa fugiat nisi dolor do eu cillum consequat excepteur. Occaecat mollit ipsum irure nisi voluptate consequat laboris dolor qui laboris do labore fugiat esse. Mollit deserunt culpa tempor veniam consequat sit.
            </p>
            <p>
                Exercitation dolor occaecat et Lorem ut mollit anim labore qui incididunt. Pariatur eu et incididunt ad mollit exercitation consectetur non ullamco dolor velit cillum consectetur. Sunt irure magna eiusmod minim laborum voluptate anim ex adipisicing proident. Aliquip velit aute sunt ipsum veniam est fugiat nulla quis veniam laboris aliqua sint. Cupidatat do voluptate do nulla proident. Labore ut officia ipsum in ea.
            </p>
            <p>
                Ex laborum aliquip eu dolore nulla incididunt enim Lorem quis amet ea adipisicing. Et enim sit id aliqua pariatur irure anim id veniam ad. Do anim dolor mollit culpa et anim.
            </p>
            <h3 style={{cursor: 'pointer'}} onClick={handleClick('light')}>Click to open modal</h3>
            <p>
                Irure consectetur ut duis sit magna excepteur ex tempor deserunt ad tempor elit. Labore pariatur mollit duis qui proident. Reprehenderit deserunt proident laborum anim laboris ea anim non quis voluptate. Minim qui nisi esse quis.
            </p>
            <p>
                Nostrud elit sunt ipsum enim labore nisi et fugiat occaecat consequat consequat minim do. Excepteur quis id Lorem sint duis sunt ex adipisicing voluptate adipisicing anim laboris mollit ex. Non culpa adipisicing consequat deserunt pariatur voluptate laboris Lorem qui.
            </p>
            <h3 style={{cursor: 'pointer'}} onClick={handleClick('dark')}>Click to open modal in dark mode</h3>
            <p>
                Elit minim sint dolor pariatur Lorem dolore consequat aliquip aliqua excepteur minim amet aute sint. Incididunt proident dolore tempor velit cillum. Laborum voluptate et aliqua proident adipisicing anim mollit esse anim mollit nisi mollit velit do. Adipisicing minim laboris labore ea ex cupidatat exercitation occaecat culpa. Nisi labore cillum reprehenderit fugiat consectetur. Consectetur aute veniam non velit. Ipsum tempor laborum sint sit ad aliqua ea sunt dolore commodo elit commodo.
            </p>
            <p>
                Proident minim eu et eiusmod. Do Lorem elit ex non cupidatat et amet voluptate qui. Non aliqua amet voluptate consequat sunt est Lorem veniam mollit consequat non qui. Lorem dolor voluptate excepteur eu dolor. Labore esse officia Lorem voluptate aliqua commodo culpa pariatur.
            </p>
            <p>
                Magna eiusmod mollit quis aute. Dolor deserunt velit sunt amet ad mollit culpa enim ipsum elit. Reprehenderit cupidatat irure aute enim. Lorem consequat irure ea occaecat irure. Reprehenderit reprehenderit ut irure ex cupidatat.
            </p>
        </div>
    </>
    );
}

storiesOf('Modal', module).add('with text', () => <ModalWithState />);
